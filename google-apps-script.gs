const SHEET_NAME = 'Ответы';
const DRINKS = ['Вино красное','Вино белое','Игристое','Пиво','Крепкий алкоголь','Безалкогольные'];
const COLUMNS = ['Время','Гостей','Имена','Придут?','Ночёвка','Транспорт',...DRINKS,'Крепкий уточнение','Спутник/ца','Комментарий','raw'];

function ensureHeader(sh){
  const row = sh.getRange(1,1,1,COLUMNS.length).getValues()[0];
  const same = row.length===COLUMNS.length && row.every((v,i)=>v===COLUMNS[i]);
  if(!same){ sh.getRange(1,1,1,COLUMNS.length).setValues([COLUMNS]); sh.setFrozenRows(1); }
}
function doPost(e){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if(!sh){ sh = ss.insertSheet(SHEET_NAME); sh.appendRow(COLUMNS); sh.setFrozenRows(1); }
  else ensureHeader(sh);
  const d = JSON.parse(e.postData.contents);
  const g = d.guests||[];
  const mapYN = v=>v==='yes'?'Да':v==='no'?'Нет':v==='maybe'?'Пока не знаю':v||'';
  const mapTravel = v=>({car:'На машине', ride:'Попутчиком', own:'Самостоятельно', maybe:'Пока не знаю'}[v]||v||'');
  const transport = x=>[mapTravel(x.travel), x.seats?`мест:${x.seats}`:'', x.from].filter(Boolean).join(' ');
  const ownerName = g[0]?.name || '';
  const pushGuest = (person, isCompanion=false)=>{
    const drinkFlags = DRINKS.map(dt=> {
      // совместимость: старое "Вино" считаем как оба
      if(dt==='Вино красное' || dt==='Вино белое') return (person.drinks||[]).includes(dt) || (person.drinks||[]).includes('Вино') ? 1 : '';
      return (person.drinks||[]).includes(dt) ? 1 : '';
    });
    const plusCell = isCompanion
      ? (ownerName ? `'+1 к ${ownerName}` : '')
      : (d.companion ? [d.companion.will==='yes'?'Буду с парой':d.companion.will==='maybe'?'Возможно с парой':'', d.companion.name?`Имя: ${d.companion.name}`:''].filter(Boolean).join(' | ') : '');
    sh.appendRow([
      new Date(), 1,
      person.name||'',
      mapYN(person.attending), mapYN(person.night),
      transport(person),
      ...drinkFlags,
      person.strong||'',
      plusCell,
      d.comment||'', JSON.stringify(d)
    ]);
  };
  g.forEach(guest=> pushGuest(guest,false));
  if(d.companion){
    const c=d.companion;
    pushGuest({name:c.name||'', attending:c.will==='yes'?'yes':c.will, night:c.night, travel:c.travel, seats:c.seats, from:c.from, drinks:c.drinks||[], strong:c.strong||''}, true);
  }
  if(g.length===0 && !d.companion){
    sh.appendRow([new Date(),0,'','','','','','','','','','','','','',d.comment||'',JSON.stringify(d)]);
  }
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
