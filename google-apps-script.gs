// Wedding RSVP → Google Sheets
// Как установить:
// 1. Создайте Google-таблицу, например "Wedding RSVP".
// 2. В меню: Расширения → Apps Script.
// 3. Удалите содержимое редактора и вставьте этот код целиком.
// 4. Сохраните (иконка дискеты), затем: Начать развёртывание → Новое развёртывание.
// 5. Тип: Веб-приложение. Выполнять от имени: «От меня». Доступ: «Все».
// 6. Нажмите «Развернуть», разрешите доступ, скопируйте URL веб-приложения
//    (выглядит как https://script.google.com/macros/s/AKfy.../exec) и пришлите мне.
//

const SHEET_NAME = 'Ответы';
const COLUMNS = ['Время','Гостей','Имена','Придут?','Ночёвка','Транспорт','Напитки','Спутник/ца','Комментарий','raw'];

function ensureHeader(sh){
  const row = sh.getRange(1,1,1,COLUMNS.length).getValues()[0];
  const same = row.length===COLUMNS.length && row.every((v,i)=>v===COLUMNS[i]);
  if(!same){
    sh.getRange(1,1,1,COLUMNS.length).setValues([COLUMNS]);
    sh.setFrozenRows(1);
  }
}
function doPost(e){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if(!sh){ sh = ss.insertSheet(SHEET_NAME); sh.appendRow(COLUMNS); sh.setFrozenRows(1); }
  else ensureHeader(sh);
  const d = JSON.parse(e.postData.contents);
  const g = d.guests||[];
  const mapYN = v=>v==='yes'?'Да':v==='no'?'Нет':v==='maybe'?'Пока не знаю':v||'';
  const join = f=>g.map(x=>mapYN(x[f])||'').join(' / ');
  const transport = x=>[mapYN(x.travel)||x.travel, x.seats?`мест:${x.seats}`:'', x.from].filter(Boolean).join(' ');
  const plus = d.companion ? [
    d.companion.will==='yes'?'Буду с парой':d.companion.will==='maybe'?'Возможно с парой':'',
    d.companion.name?`Имя: ${d.companion.name}`:'',
    d.companion.night?`Ночёвка: ${mapYN(d.companion.night)}`:'',
    d.companion.travel?`Транспорт: ${transport(d.companion)}`:'',
    (d.companion.drinks||[]).length?`Напитки: ${d.companion.drinks.join(', ')}`:''
  ].filter(Boolean).join(' | ') : '';
  sh.appendRow([
    new Date(), g.length,
    g.map(x=>x.name).filter(Boolean).join(', '),
    join('attending'), join('night'),
    g.map(transport).join(' / '),
    g.map(x=>(x.drinks||[]).join(', ')).join(' / '),
    plus, d.comment||'', JSON.stringify(d)
  ]);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
