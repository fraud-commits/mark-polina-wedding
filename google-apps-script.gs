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
// Скрипт только дописывает строки в лист «Ответы» — ничего больше.
// URL не публикуйте: он будет виден в исходниках сайта, это нормально,
// худшее что может случиться — лишняя строка-спам в таблице.

const SHEET_NAME = 'Ответы';
const COLUMNS = ['Время', 'Гостей', 'Имена', 'Придут?', 'Ночёвка', 'Транспорт', 'Напитки', 'Питание', '+1', 'Комментарий', 'raw'];

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(COLUMNS);
    sh.setFrozenRows(1);
  }
  const d = JSON.parse(e.postData.contents);
  const g = d.guests || [];
  const join = field => g.map(x => x[field] || '').join(' / ');
  const plus = d.companion
    ? [d.companion.will, d.companion.name, d.companion.night, (d.companion.drinks || []).join(', ')].filter(Boolean).join(' | ')
    : '';
  sh.appendRow([
    new Date(),
    g.length,
    g.map(x => x.name).filter(Boolean).join(', '),
    join('attending'),
    join('night'),
    g.map(x => [x.travel, x.seats, x.from].filter(Boolean).join(' ')).join(' / '),
    g.map(x => (x.drinks || []).join(', ')).join(' / '),
    join('food'),
    plus,
    d.comment || '',
    JSON.stringify(d)
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
