const SHEET_NAME = 'Ответы';
const DRINKS = ['Вино красное','Вино белое','Игристое','Крепкий алкоголь','Безалкогольные'];
const COLUMNS = ['Время','Гостей','Имена','Придут?','Ночёвка','Транспорт',...DRINKS,'Спутник/ца','Комментарий','raw'];
// Колонки старой версии формы — удаляются, только если в них нет данных.
const LEGACY_COLUMNS = ['Пиво','Крепкий уточнение'];

function getSheet(ss){
  let sh = ss.getSheetByName(SHEET_NAME);
  if(!sh){ sh = ss.insertSheet(SHEET_NAME); sh.appendRow(COLUMNS); sh.setFrozenRows(1); }
  return sh;
}

// Заголовок читаем по ИМЕНАМ колонок и пишем значения по именам, а не по номерам.
// Так лишние или старые колонки не сдвигают уже сохранённые данные.
function readHeader(sh){
  const cols = Math.max(sh.getLastColumn(), 1);
  const row = sh.getRange(1,1,1,cols).getValues()[0].map(v=>String(v==null?'':v).trim());
  while(row.length && !row[row.length-1]) row.pop();
  if(!row.some(Boolean)){
    sh.getRange(1,1,1,COLUMNS.length).setValues([COLUMNS]);
    sh.setFrozenRows(1);
    return COLUMNS.slice();
  }
  return row;
}

// Удаляем пустые колонки старой версии (Пиво, Крепкий уточнение).
// Если в колонке есть данные — не трогаем её, просто оставляем пустой.
function cleanupColumns(sh){
  for(let guard=0; guard<8; guard++){
    const header = readHeader(sh);
    const name = LEGACY_COLUMNS.find(n => header.indexOf(n) >= 0);
    if(!name) break;
    const col = header.indexOf(name) + 1;
    const lastRow = sh.getLastRow();
    let hasData = false;
    if(lastRow > 1){
      const vals = sh.getRange(2, col, lastRow-1, 1).getValues().flat();
      hasData = vals.some(v => String(v==null?'':v).trim() !== '');
    }
    if(hasData) break;
    sh.deleteColumn(col);
  }
}

function doGet(e){
  // Намеренно без данных ответа — по ссылке скрипта нельзя прочитать анкеты гостей.
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = getSheet(ss);
  cleanupColumns(sh);
  const header = readHeader(sh);
  const d = JSON.parse(e.postData.contents);
  const g = d.guests || [];
  const mapYN = v=>v==='yes'?'Да':v==='no'?'Нет':v==='maybe'?'Пока не знаю':(v||'');
  const mapTravel = v=>({car:'На машине', ride:'Попутчиком', own:'Самостоятельно', maybe:'Пока не знаю'}[v]||v||'');
  const transport = x=>[mapTravel(x.travel), x.seats?`мест:${x.seats}`:'', x.from].filter(Boolean).join(' ');
  const drinkFlag = (person, dt)=>{
    const list = person.drinks||[];
    // совместимость: старое "Вино" считаем как оба
    if(dt==='Вино красное' || dt==='Вино белое') return (list.includes(dt) || list.includes('Вино')) ? 1 : '';
    return list.includes(dt) ? 1 : '';
  };
  const ownerName = g[0]?.name || '';
  const companionCell = d.companion
    ? [d.companion.will==='yes'?'Буду с парой':d.companion.will==='maybe'?'Возможно с парой':'', d.companion.name?`Имя: ${d.companion.name}`:''].filter(Boolean).join(' | ')
    : '';
  const rowFor = (person, isCompanion)=>{
    const row = {
      'Время': new Date(),
      'Гостей': 1,
      'Имена': person.name||'',
      'Придут?': mapYN(person.attending),
      'Ночёвка': mapYN(person.night),
      'Транспорт': transport(person),
      'Спутник/ца': isCompanion ? (ownerName ? `'+1 к ${ownerName}` : '') : companionCell,
      'Комментарий': d.comment||'',
      'raw': JSON.stringify(d)
    };
    DRINKS.forEach(dt=>{ row[dt] = drinkFlag(person, dt); });
    return row;
  };
  const rows = g.map(guest=>rowFor(guest,false));
  if(d.companion){
    const c = d.companion;
    rows.push(rowFor({name:c.name||'', attending:c.will==='yes'?'yes':c.will, night:c.night, travel:c.travel, seats:c.seats, from:c.from, drinks:c.drinks||[]}, true));
  }
  if(rows.length===0){
    rows.push({'Время':new Date(),'Гостей':0,'Комментарий':d.comment||'','raw':JSON.stringify(d)});
  }
  rows.forEach(r=>{ sh.appendRow(header.map(h=> r[h]===undefined || r[h]===null ? '' : r[h])); });
  // Дата и время в привычном виде: 20.10.2026 22:10 (в ячейке остаётся настоящая дата — сортировка работает)
  if(header.indexOf('Время') >= 0){
    sh.getRange(2, header.indexOf('Время')+1, Math.max(sh.getLastRow()-1,1), 1).setNumberFormat('DD.MM.YYYY HH:MM');
  }
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
