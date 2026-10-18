// Only fictional examples belong in client code. Real invitations require a server.
const examples = {
  general: { greeting: 'Дорогие наши!', note: 'Приглашаем вас на нашу свадьбу.', guests: [''], plusOne: false },
  plusone: { greeting: 'Дорогая Анна!', note: 'Будем рады видеть тебя вместе со спутником или спутницей.', guests: ['Анна'], plusOne: true },
  couple: { greeting: 'Дорогие Анна и Максим!', note: 'Приглашаем вас разделить с нами этот день.', guests: ['Анна', 'Максим'], plusOne: false }
};
const select = (name, label, options) => `<label>${label}<select name="${name}" required><option value="">Выберите ответ</option>${options.map(([value,text]) => `<option value="${value}">${text}</option>`).join('')}</select></label>`;
function details(id) {
  return `${select(id+'-night','Останетесь на ночь?', [['yes','Да, хочу остаться'],['no','Нет'],['maybe','Пока не знаю']])}
  ${select(id+'-travel','Как планируете добраться?', [['car','На своей машине'],['ride','Хочу присоединиться к кому-то'],['own','Доберусь самостоятельно'],['maybe','Пока не знаю']])}
  <div data-car hidden>${select(id+'-seats','Сможете взять попутчиков?', [['0','Нет свободных мест'],['1','1 место'],['2','2 места'],['3','3 места'],['4','4 места'],['maybe','Пока не знаю']])}</div>
  <div data-route hidden><label>Откуда поедете?<input name="${id}-from" maxlength="100" placeholder="Город или район"></label><p class="small">Пожелание о попутчиках передадим организаторам; поездка ещё не согласована.</p></div>
  <p>Какие напитки предпочитаете?</p><div class="checks">${['Вино','Игристое','Пиво','Крепкий алкоголь','Безалкогольные'].map((drink,i)=>`<label><input type="checkbox" name="${id}-drinks" value="${i}"> ${drink}</label>`).join('')}</div>
  <label>Аллергии и пожелания по питанию<input name="${id}-food" maxlength="500" placeholder="Если есть"></label>`;
}
function guest(id, name) {
 return `<fieldset><legend>${name || 'Ваш ответ'}</legend>${name ? '' : '<label>Имя и фамилия<input name="guest-name" required maxlength="120" autocomplete="name"></label>'}${select(id+'-attending','Сможете прийти?', [['yes','С радостью!'],['no','К сожалению, нет'],['maybe','Пока не знаю']])}<div data-attending hidden>${details(id)}</div></fieldset>`;
}
function visibility(element, show) {
 element.hidden = !show;
 element.querySelectorAll('input,select,textarea').forEach(control => {control.disabled = !show;});
}
function sync() {
 document.querySelectorAll('[data-attending]').forEach(block => {
   const attending = block.parentElement.querySelector('select').value === 'yes';
   visibility(block, attending);
 });
 const plus = document.querySelector('[data-plus]');
 if(plus) {
   const hostYes = document.querySelector('[name="g0-attending"]').value === 'yes';
   visibility(plus, hostYes);
   visibility(document.querySelector('[data-companion]'), hostYes && document.querySelector('[name="companion"]').value === 'yes');
 }
 document.querySelectorAll('[data-car]').forEach(block => {
   const travel = block.parentElement.querySelector('select[name$="-travel"]');
   const active = !travel.disabled;
   visibility(block, active && travel.value === 'car');
   visibility(block.parentElement.querySelector('[data-route]'), active && ['car','ride'].includes(travel.value));
 });
 document.querySelector('#status').textContent = '';
}
function render(mode) {
 const invitation = examples[mode] || examples.general;
 document.querySelector('#greeting').textContent = invitation.greeting;
 document.querySelector('#invitation-note').textContent = invitation.note;
 document.querySelector('#guests').innerHTML = invitation.guests.map((name,i)=>guest('g'+i,name)).join('') + (invitation.plusOne ? `<fieldset data-plus hidden><legend>Ваш +1</legend>${select('companion','Будете со спутником или спутницей?', [['no','Приду одна'],['yes','Буду с +1'],['maybe','Пока не знаю']])}<div data-companion hidden><label>Имя спутника или спутницы — если уже известно<input name="companion-name" maxlength="120" placeholder="Можно указать позже"></label><p class="small">Имя необязательно. Ниже — пожелания вашего +1.</p>${details('plus')}</div></fieldset>` : '');
 sync();
}
const picker = document.querySelector('#demo');
picker.addEventListener('change',()=>render(picker.value));
document.querySelector('#response').addEventListener('change',sync);
document.querySelector('#response').addEventListener('submit',event=>{
 event.preventDefault();
 document.querySelector('#status').textContent = 'Анкета заполнена корректно. Это макет: ответ не отправлен. После подключения хранилища здесь появится подтверждение сохранения.';
});
render('general');
