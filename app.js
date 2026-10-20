// Personal invitations keyed by the ?g= token in the link. Each guest sees
// only their own greeting and composition; no token → generic form.
const noteOne = 'Будем рады видеть вас в этот день.';
const noteTwo = 'Приглашаем вас разделить с нами этот день.';
const plusHe = { legend: 'Ваш +1', q: 'Придёте один или со спутницей?', alone: 'Приду один', with: 'Буду со спутницей', nameLabel: 'Имя спутницы — если уже известно', note: 'Имя необязательно. Ниже — пожелания вашего +1.' };
const invitations = {
  default: { greeting: 'Дорогие наши!', note: 'Приглашаем вас на нашу свадьбу.', guests: [''], plusOne: false },
  // Гости Полины (у пар — оба имени, у +1 — только имя гостя)
  'yuriy-elena': { greeting: 'Дорогие папа и мама!', note: noteTwo, guests: ['Юрий', 'Елена'], plusOne: false },
  maksim: { greeting: 'Дорогой Максим!', note: noteOne, guests: ['Максим'], plusOne: false },
  'andrey-yuliya': { greeting: 'Дорогие Андрей, Юлия и Даня!', note: 'Приглашаем вас всех — вместе с Даней.', guests: ['Андрей', 'Юлия', 'Даня'], plusOne: false },
  nikita: { greeting: 'Дорогой Никита!', note: noteOne, guests: ['Никита'], plusOne: false },
  valya: { greeting: 'Дорогая бабушка Валя!', note: noteOne, guests: ['Бабушка Валя'], plusOne: false },
  'toms-natasha': { greeting: 'Дорогие Томс и Наташа!', note: noteTwo, guests: ['Томс', 'Наташа'], plusOne: false },
  'milos-dasha': { greeting: 'Дорогие Князь Милош и Даша!', note: noteTwo, guests: ['Милош', 'Даша'], plusOne: false },
  'yakov-elvira': { greeting: 'Дорогие Яков и Эльвира!', note: noteTwo, guests: ['Яков', 'Эльвира'], plusOne: false },
  'ernest-kseniya': { greeting: 'Дорогие Эрнест и Ксения!', note: noteTwo, guests: ['Эрнест', 'Ксения'], plusOne: false },
  kirill: { greeting: 'Дорогой Кирилл!', note: 'Будем рады видеть вас вместе со спутницей.', guests: ['Кирилл'], plusOne: true, partner: plusHe },
  'rey-anastasiya': { greeting: 'Дорогие Рей и Анастасия!', note: noteTwo, guests: ['Рей', 'Анастасия'], plusOne: false },
  cheslav: { greeting: 'Дорогой Чеслав!', note: 'Будем рады видеть вас вместе со спутницей.', guests: ['Чеслав'], plusOne: true, partner: plusHe },
  // Гости Марика
  'roy-kseniya': { greeting: 'Дорогие Рой и Ксения!', note: noteTwo, guests: ['Рой', 'Ксения'], plusOne: false },
  'kirill-alina': { greeting: 'Дорогие Кирилл и Алина!', note: noteTwo, guests: ['Кирилл', 'Алина'], plusOne: false },
  svetlana: { greeting: 'Дорогая мама!', note: noteOne, guests: ['Светлана'], plusOne: false },
  'nikolay-victoria': { greeting: 'Дорогая семья Коляко!', note: 'Приглашаем вас всех — вместе с детьми.', guests: ['Николай', 'Виктория', {name:'Аким', child:true}, {name:'Алиса', child:true}], plusOne: false },
  'vitaliy-santa': { greeting: 'Дорогие Виталий и Санта!', note: noteTwo, guests: ['Виталий', 'Санта'], plusOne: false },
  'denis-marina': { greeting: 'Дорогие Денис и Марина!', note: noteTwo, guests: ['Денис', 'Марина'], plusOne: false },
  'vitaliy-basha': { greeting: 'Дорогие Виталий и Баша!', note: noteTwo, guests: ['Виталий', 'Баша'], plusOne: false },
  evgeniy: { greeting: 'Дорогой Евгений!', note: 'Будем рады видеть вас вместе со спутницей.', guests: ['Евгений'], plusOne: true, partner: plusHe },
  'zhan-marina': { greeting: 'Дорогие Жан и Марина!', note: noteTwo, guests: ['Жан', 'Марина'], plusOne: false },
  oscars: { greeting: 'Дорогой Оскарс!', note: 'Будем рады видеть вас вместе со спутницей.', guests: ['Оскарс'], plusOne: true, partner: plusHe },
  'janis-valeriya': { greeting: 'Дорогие Янис и Валерия!', note: noteTwo, guests: ['Янис', 'Валерия'], plusOne: false },
  'zbignev-marina': { greeting: 'Дорогие Збигнев и Марина!', note: noteTwo, guests: ['Збигнев', 'Марина'], plusOne: false },
  andrey: { greeting: 'Дорогой Андрей!', note: 'Будем рады видеть вас вместе со спутницей.', guests: ['Андрей'], plusOne: true, partner: plusHe }
};
// Old single-name and old couple-token links keep working after the rename.
const legacy = {
  elena: 'yuriy-elena', 'elena-yuriy': 'yuriy-elena',
  yuliya: 'andrey-yuliya', 'yuliya-andrey': 'andrey-yuliya',
  natasha: 'toms-natasha', 'natasha-toms': 'toms-natasha',
  dasha: 'milos-dasha', 'dasha-milos': 'milos-dasha',
  yakov: 'yakov-elvira', ernest: 'ernest-kseniya',
  rey: 'rey-anastasiya', roy: 'roy-kseniya',
  alina: 'kirill-alina', 'alina-kirill': 'kirill-alina',
  victoria: 'nikolay-victoria', 'victoria-nikolay': 'nikolay-victoria',
  denis: 'denis-marina', zhan: 'zhan-marina',
  janis: 'janis-valeriya', zbignev: 'zbignev-marina', yupik: 'evgeniy'
};
const token = new URLSearchParams(location.search).get('g') || '';
const invitation = invitations[legacy[token] || token] || invitations.default;
const select = (name, label, options) => `<label>${label}<select name="${name}" required><option value="">Выберите ответ</option>${options.map(([value,text]) => `<option value="${value}">${text}</option>`).join('')}</select></label>`;
const getGuestName = g => typeof g === 'string' ? g : (g.name || '');
const isChildGuest = g => typeof g === 'object' && !!g.child;
function details(id, isChild) {
  // Детям вопросы не задаём — только «Сможете прийти?»
  if (isChild) return '';
  return `${select(id+'-night','Останетесь на ночь?', [['yes','Да, хочу остаться'],['no','Нет'],['maybe','Пока не знаю']])}
  ${select(id+'-travel','Как планируете добраться?', [['car','На своей машине'],['ride','Хочу присоединиться к кому-то'],['own','Доберусь самостоятельно'],['maybe','Пока не знаю']])}
  <div data-car hidden>${select(id+'-seats','Сможете взять попутчиков?', [['0','Нет свободных мест'],['1','1 место'],['2','2 места'],['3','3 места'],['4','4 места'],['maybe','Пока не знаю']])}</div>
  <div data-route hidden><label>Откуда поедете?<input name="${id}-from" maxlength="100" placeholder="Город или район"></label><p class="small">Пожелание о попутчиках обсудим в группе WhatsApp — поездка ещё не согласована.</p></div>
  <p>Какие напитки предпочитаете?</p><div class="checks">${['Вино красное','Вино белое','Игристое','Пиво','Крепкий алкоголь','Безалкогольные'].map((drink,i)=>`<label><input type="checkbox" name="${id}-drinks" value="${i}"> ${drink}</label>`).join('')}</div>
  <div data-strong hidden><label>Уточните крепкий алкоголь / коктейли<input name="${id}-strong" maxlength="300" placeholder="Виски, джин, ром, любимые коктейли — Апероль, Мохито и т.д."></label></div>`;
}
function guest(id, entry) {
 const name = getGuestName(entry);
 const child = isChildGuest(entry);
 return `<fieldset><legend>${name || 'Ваш ответ'}</legend>${name ? '' : '<label>Имя и фамилия<input name="guest-name" required maxlength="120" autocomplete="name"></label>'}${select(id+'-attending','Сможете прийти?', [['yes','С радостью!'],['no','К сожалению, нет'],['maybe','Пока не знаю']])}<div data-attending hidden>${details(id, child)}</div></fieldset>`;
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
   const seats = block.querySelector('select').value;
   const offersRide = travel.value === 'car' && ['1','2','3','4'].includes(seats);
   visibility(block.parentElement.querySelector('[data-route]'), active && (travel.value === 'ride' || offersRide));
 });
 document.querySelectorAll('[data-strong]').forEach(block => {
   const box = block.closest('[data-attending], [data-companion]');
    const on = box && !box.hidden && !!block.parentElement.querySelector('input[name$="-drinks"]:checked')?.parentElement.textContent.includes('Крепкий');
   visibility(block, on);
 });
 document.querySelector('#status').textContent = '';
}
function render() {
 document.querySelector('#greeting').textContent = invitation.greeting;
 document.querySelector('#invitation-note').textContent = invitation.note;
 const p = invitation.partner || { legend: 'Ваш +1', q: 'Придёте один/одна или с парой?', alone: 'Приду один/одна', with: 'Буду с парой', nameLabel: 'Имя вашего +1 — если уже известно', note: 'Имя необязательно. Ниже — пожелания вашего +1.' };
 document.querySelector('#guests').innerHTML = invitation.guests.map((name,i)=>guest('g'+i,name)).join('') + (invitation.plusOne ? `<fieldset data-plus hidden><legend>${p.legend}</legend>${select('companion', p.q, [['no',p.alone],['yes',p.with],['maybe','Пока не знаю']])}<div data-companion hidden><label>${p.nameLabel}<input name="companion-name" maxlength="120" placeholder="Можно указать позже"></label><p class="small">${p.note}</p>${details('plus')}</div></fieldset>` : '');
 sync();
}
// Envelope opening screen. Shown on every visit — it's part of the ritual.
const envelope = document.querySelector('#envelope');
if (envelope) {
 document.body.classList.add('env-locked');
 const open = () => {
   if (envelope.classList.contains('open')) return;
   envelope.classList.add('open');
   setTimeout(() => document.body.classList.remove('env-locked'), matchMedia('(prefers-reduced-motion: reduce)').matches ? 200 : 2200);
   setTimeout(() => envelope.remove(), matchMedia('(prefers-reduced-motion: reduce)').matches ? 250 : 2350);
 };
 envelope.addEventListener('click', open);
 envelope.addEventListener('keydown', event => {
   if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
 });
}
document.querySelector('#response').addEventListener('change',sync);
// Paste the Google Apps Script web app URL here to start saving responses.
const RSVP_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzJxggv3SwYO9BNySjITeN1jpRghemR-Nsg4r2yFIR1emaxTdOcH_IvkpqwgipiEIfckg/exec';
function collect(form) {
 const val = name => { const el = form.querySelector(`[name="${name}"]`); return el && !el.disabled ? el.value.trim() : ''; };
 const drinksOf = id => [...form.querySelectorAll(`input[name="${id}-drinks"]:checked`)].filter(c => !c.disabled).map(c => c.parentElement.textContent.trim());
 const guestData = id => ({ name: '', attending: val(id+'-attending'), night: val(id+'-night'), travel: val(id+'-travel'), seats: val(id+'-seats'), from: val(id+'-from'), drinks: drinksOf(id), food: val(id+'-food'), strong: val(id+'-strong') });
 const guests = [];
 document.querySelectorAll('#guests > fieldset:not([data-plus])').forEach((fs, i) => {
   const data = guestData('g'+i);
   const legend = fs.querySelector('legend').textContent;
   data.name = val('guest-name') || (legend === 'Ваш ответ' ? '' : legend);
   guests.push(data);
 });
 let companion = null;
 const plus = document.querySelector('[data-plus]');
 if (plus && !plus.hidden) {
   const will = val('companion');
   if (will === 'yes' || will === 'maybe') {
     companion = { ...guestData('plus'), will, name: val('companion-name') };
     delete companion.attending;
   }
 }
 return { token, guests, companion, comment: val('comment') };
}
document.querySelector('#response').addEventListener('submit', async event => {
 event.preventDefault();
 const form = event.target;
 const status = document.querySelector('#status');
 if (!RSVP_ENDPOINT) {
   status.textContent = 'Анкета заполнена корректно. Это макет: ответ не отправлен. После подключения хранилища здесь появится подтверждение сохранения.';
   return;
 }
 const button = form.querySelector('button[type="submit"]');
 button.disabled = true;
 status.textContent = 'Отправляем...';
 try {
   await fetch(RSVP_ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(collect(form)) });
   form.reset();
   render();
   status.textContent = 'Спасибо! Ваш ответ сохранён. Очень ждём встречи 🤍';
 } catch (e) {
   status.textContent = 'Не получилось отправить. Попробуйте ещё раз или напишите нам.';
 }
 button.disabled = false;
});
// Countdown to the wedding day.
const countdown = document.querySelector('.countdown');
if (countdown) {
 const target = new Date('2027-06-26T12:00:00');
 const pad = n => String(n).padStart(2, '0');
 const tick = () => {
   let diff = Math.max(0, target - Date.now());
   const d = Math.floor(diff / 864e5); diff -= d * 864e5;
   const h = Math.floor(diff / 36e5); diff -= h * 36e5;
   const m = Math.floor(diff / 6e4); diff -= m * 6e4;
   const s = Math.floor(diff / 1e3);
   countdown.querySelector('[data-cd="d"]').textContent = d;
   countdown.querySelector('[data-cd="h"]').textContent = pad(h);
   countdown.querySelector('[data-cd="m"]').textContent = pad(m);
   countdown.querySelector('[data-cd="s"]').textContent = pad(s);
 };
 tick();
 setInterval(tick, 1000);
}
render();

// Editorial reveal for place block
(function(){const els=document.querySelectorAll('#place .reveal');if(!els.length)return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});els.forEach((el,i)=>{el.style.transitionDelay=(i*70)+'ms';io.observe(el)});if(matchMedia('(prefers-reduced-motion: reduce)').matches)els.forEach(el=>el.classList.add('in'))})();

// place gallery
(function(){
  const g=document.querySelector('.place-gallery'); if(!g) return;
  const track=g.querySelector('.pg-track'); const slides=[...track.children]; const dots=g.querySelector('.pg-dots');
  const counter=document.createElement("p"); counter.className="pg-counter"; counter.setAttribute("aria-label","Номер фотографии"); g.appendChild(counter);
  let idx=0; let timer=null;
  slides.forEach((_,i)=>{const b=document.createElement('button'); b.type='button'; b.setAttribute('role','tab'); b.setAttribute('aria-label','Фото '+(i+1)); b.addEventListener('click',()=>{go(i); restart();}); dots.appendChild(b);});
  const btns=[...dots.children];
  function go(n){idx=(n+slides.length)%slides.length; counter.textContent=String(idx+1).padStart(2,"0")+" / "+String(slides.length).padStart(2,"0"); track.style.transform='translateX('+(-idx*100)+'%)'; btns.forEach((b,i)=>b.setAttribute('aria-selected', i===idx?'true':'false')); }
  function restart(){clearInterval(timer); timer=setInterval(()=>go(idx+1), 3800);}
  g.querySelector('.pg-prev').addEventListener('click',()=>{go(idx-1); restart();});
  g.querySelector('.pg-next').addEventListener('click',()=>{go(idx+1); restart();});
  let sx=0; track.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true}); track.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>40) {go(idx+(dx<0?1:-1)); restart();}});
  g.addEventListener('mouseenter',()=>clearInterval(timer)); g.addEventListener('mouseleave',restart);
  go(0); restart();
})();


// Timeline heart rides the winding path with the page scroll (like the reference invite).
(function () {
 const tl = document.querySelector('.timeline');
 const heart = tl && tl.querySelector('.tl-heart');
 const svg = tl && tl.querySelector('.tl-path');
 const path = svg && svg.querySelector('path');
 if (!tl || !heart || !path) return;
 const len = path.getTotalLength();
 const vb = svg.viewBox.baseVal;
 const move = () => {
   const r = tl.getBoundingClientRect();
   const vh = window.innerHeight;
   let p = (vh * 0.9 - r.top) / (r.height + vh * 0.75);
   p = Math.max(0, Math.min(1, p));
   const pt = path.getPointAtLength(p * len);
   heart.style.left = (pt.x * (r.width / vb.width)) + 'px';
   heart.style.top = (pt.y * (r.height / vb.height)) + 'px';
 };
 addEventListener('scroll', move, { passive: true });
 addEventListener('resize', move);
 move();
})();
