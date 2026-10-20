const SHEET_NAME = 'Ответы';
const DRINKS = ['Вино красное','Вино белое','Игристое','Крепкий алкоголь','Безалкогольные'];
const COLUMNS = ['Время','Гостей','Имена','Придут?','Ночёвка','Транспорт',...DRINKS,'Спутник/ца','Комментарий','raw'];

// Колонки привязаны к заголовкам, а не к номерам: если в таблице уже есть
// старые колонки (например «Пиво» или «Крепкий уточнение»), данные не сдвинутся.
function getSheet(ss){
  const sh = ss.getSheetByName(SHEET_NAME);
  if(!sh){ const s = ss.insertSheet(SHEET_NAME); s.appendRow(COLUMNS); s.setFrozenRows(1); return s; }
  return sh;
}
function readHeader(sh){
  const row = sh.getRange(1,1,1,Math.max(sh.getLastColumn(),1)).getValues()[0].map(v=>String(v).trim());
  if(!row.some(Boolean)){ sh.getRange(1,1,1,COLUMNS.length).setValues([COLUMNS]); sh.setFrozenRows(1); return COLUMNS.slice(); }
  return row;
}

function doPost(e){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = getSheet(ss);
  const header = readHeader(sh);
  const d = JSON.parse(e.postData.contents);
  const g = d.guests||[];
  const mapYN = v=>v==='yes'?'Да':v==='no'?'Нет':v==='maybe'?'Пока не знаю':v||'';
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
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
