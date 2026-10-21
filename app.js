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
  'toms-natasha': { greeting: 'Дорогие Томс и Натали!', note: noteTwo, guests: ['Томс', 'Натали'], plusOne: false },
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
// Строки формы на двух языках. Русский вариант совпадает с тем, что было в HTML.
const STR = {
  ru: {
    pick: 'Выберите ответ', name: 'Имя и фамилия', attending: 'Сможете прийти?',
    yes: 'С радостью!', no: 'К сожалению, нет', maybe: 'Пока не знаю',
    night: 'Останетесь на ночь?', nightYes: 'Да, хочу остаться', nightNo: 'Нет', nightMaybe: 'Пока не знаю',
    travel: 'Как планируете добраться?', car: 'На своей машине', ride: 'Хочу присоединиться к кому-то',
    own: 'Доберусь самостоятельно', travelMaybe: 'Пока не знаю',
    seats: 'Сможете взять попутчиков?', noSeats: 'Нет свободных мест',
    seat1: '1 место', seat2: '2 места', seat3: '3 места', seat4: '4 места',
    from: 'Откуда поедете?', fromPh: 'Город или район',
    rideNote: 'Пожелание о попутчиках обсудим в группе WhatsApp — поездка ещё не согласована.',
    drinks: 'Какие напитки предпочитаете?', legend: 'Анкета',
    plusLegend: 'Ваш +1', plusQ: 'Придёте один или со спутницей?', alone: 'Приду один', with: 'Буду со спутницей',
    plusName: 'Имя спутницы — если уже известно', plusNote: 'Имя необязательно. Ниже — пожелания вашего +1.',
    ok: 'Спасибо! Ваш ответ сохранён. Очень ждём встречи 🤍',
    fail: 'Не получилось отправить. Попробуйте ещё раз или напишите нам.',
    demo: 'Анкета заполнена корректно. Это макет: ответ не отправлен. После подключения хранилища здесь появится подтверждение сохранения.',
    sending: 'Отправляем...'
  },
  en: {
    pick: 'Choose an answer', name: 'Full name', attending: 'Will you be able to come?',
    yes: 'With pleasure!', no: 'Unfortunately, not', maybe: 'Not sure yet',
    night: 'Will you stay overnight?', nightYes: 'Yes, we would like to stay', nightNo: 'No', nightMaybe: 'Not sure yet',
    travel: 'How will you get there?', car: 'By car', ride: 'I would like a ride',
    own: 'I will get there myself', travelMaybe: 'Not sure yet',
    seats: 'Could you take any passengers?', noSeats: 'No spare seats',
    seat1: '1 seat', seat2: '2 seats', seat3: '3 seats', seat4: '4 seats',
    from: 'Where will you travel from?', fromPh: 'Town or district',
    rideNote: 'Rides will be sorted out in our WhatsApp group — the plan is not final yet.',
    drinks: 'What would you like to drink?', legend: 'RSVP',
    plusLegend: 'Your +1', plusQ: 'Will you come alone or with a partner?', alone: 'I will come alone', with: 'I will come with a partner',
    plusName: 'Your guest\u2019s name \u2014 if you know it yet', plusNote: 'The name is optional. Below are your guest\u2019s preferences.',
    ok: 'Thank you! Your reply has been saved. We are looking forward to seeing you 🤍',
    fail: 'We could not send it. Please try again or write to us.',
    demo: 'The form is filled in correctly. This is a mock-up: the reply was not sent.',
    sending: 'Sending...'
  }
};
// Напитки: подпись показывается по-английски, а в таблицу уходит русское название.
const DRINKS = [
  { ru: 'Вино красное', en: 'Red wine' },
  { ru: 'Вино белое', en: 'White wine' },
  { ru: 'Игристое', en: 'Sparkling' },
  { ru: 'Крепкий алкоголь', en: 'Spirits' },
  { ru: 'Безалкогольные', en: 'Soft drinks' }
];
// Имена для английской версии: латиница для тех, кто по-русски не читает.
const EN_NAMES = { 'Баша': 'Basia', 'Милош': 'Knjaz Miloš', 'Даша': 'Daria', 'Томс': 'Toms', 'Виталий': 'Vitaliy', 'Натали': 'Natalie' };
const TR = { а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'e',ж:'zh',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'kh',ц:'ts',ч:'ch',ш:'sh',щ:'shch',ъ:'',ы:'y',ь:'',э:'e',ю:'yu',я:'ya' };
const toLatin = s => s.split('').map(ch=>{
  const low = ch.toLowerCase();
  if(!(low in TR)) return ch;
  const tr = TR[low];
  return ch === low ? tr : tr.charAt(0).toUpperCase() + tr.slice(1);
}).join('');
const enName = name => EN_NAMES[name] || (/[a-zA-Z]/.test(name) ? name : toLatin(name));
const T = () => STR[currentLang];
const token = new URLSearchParams(location.search).get('g') || '';
const resolvedToken = legacy[token] || token;
const invitation = invitations[resolvedToken] || invitations.default;
const select = (name, label, options) => `<label>${label}<select name="${name}" required><option value="">${T().pick}</option>${options.map(([value,text]) => `<option value="${value}">${text}</option>`).join('')}</select></label>`;
const getGuestName = g => typeof g === 'string' ? g : (g.name || '');
const isChildGuest = g => typeof g === 'object' && !!g.child;
function details(id, isChild) {
  // Детям вопросы не задаём — только «Сможете прийти?»
  if (isChild) return '';
  const t = T();
  return `${select(id+'-night',t.night, [['yes',t.nightYes],['no',t.nightNo],['maybe',t.nightMaybe]])}
  ${select(id+'-travel',t.travel, [['car',t.car],['ride',t.ride],['own',t.own],['maybe',t.travelMaybe]])}
  <div data-car hidden>${select(id+'-seats',t.seats, [['0',t.noSeats],['1',t.seat1],['2',t.seat2],['3',t.seat3],['4',t.seat4],['maybe',t.maybe]])}</div>
  <div data-route hidden><label>${t.from}<input name="${id}-from" maxlength="100" placeholder="${t.fromPh}"></label><p class="small">${t.rideNote}</p></div>
  <p>${t.drinks}</p><div class="checks">${DRINKS.map((d,i)=>`<label><input type="checkbox" name="${id}-drinks" value="${i}" data-drink="${d.ru}"> ${currentLang==='en'?d.en:d.ru}</label>`).join('')}</div>`;
}
function guest(id, entry) {
  const rawName = getGuestName(entry);
  const name = currentLang === 'en' && rawName ? enName(rawName) : rawName;
  const child = isChildGuest(entry);
  const t = T();
  return `<fieldset><legend>${name || t.legend}</legend>${name ? '' : `<label>${t.name}<input name="guest-name" required maxlength="120" autocomplete="name"></label>`}${select(id+'-attending',t.attending, [['yes',t.yes],['no',t.no],['maybe',t.maybe]])}<div data-attending hidden>${details(id, child)}</div></fieldset>`;
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
 document.querySelector('#status').textContent = '';
}
function enGreeting(){
  if(resolvedToken === 'yuriy-elena') return 'Dear Mum and Dad!';
  if(resolvedToken === 'svetlana') return 'Dear Mum!';
  const names = invitation.guests.map(g => enName(getGuestName(g)));
  if(!names.length || !names[0]) return 'Dear friends!';
  if(names.length === 1) return `Dear ${names[0]}!`;
  if(names.length === 2) return `Dear ${names[0]} and ${names[1]}!`;
  return `Dear ${names.slice(0,-1).join(', ')} and ${names[names.length-1]}!`;
}
function enNote(){
  if(resolvedToken === 'nikolay-victoria') return 'We invite you all — together with the children.';
  if(resolvedToken === 'andrey-yuliya') return 'We invite you all — together with Danya.';
  if(invitation.plusOne) return 'We would love to see you together with your guest.';
  if(invitation.guests.length === 1) return 'We would love to see you on this day.';
  return 'We would love you to share this day with us.';
}
function render() {
  const t = T();
  const en = currentLang === 'en';
  document.querySelector('#greeting').textContent = en ? enGreeting() : invitation.greeting;
  document.querySelector('#invitation-note').textContent = en ? enNote() : invitation.note;
  const p = (currentLang === 'en') ? { legend: t.plusLegend, q: t.plusQ, alone: t.alone, with: t.with, nameLabel: t.plusName, note: t.plusNote } : (invitation.partner || { legend: t.plusLegend, q: t.plusQ, alone: t.alone, with: t.with, nameLabel: t.plusName, note: t.plusNote });
  document.querySelector('#guests').innerHTML = invitation.guests.map((name,i)=>guest('g'+i,name)).join('') + (invitation.plusOne ? `<fieldset data-plus hidden><legend>${p.legend}</legend>${select('companion', p.q, [['no',p.alone],['yes',p.with],['maybe',t.maybe]])}<div data-companion hidden><label>${p.nameLabel}<input name="companion-name" maxlength="120" placeholder="${en ? 'You can add it later' : 'Можно указать позже'}"></label><p class="small">${p.note}</p>${details('plus')}</div></fieldset>` : '');
  sync();
}
window.addEventListener('langchange', () => { render(); applyLang(currentLang); });
// The invitation links carry #invitation so the scroll lands on the letter.
// While the envelope covers the page we don't want that jump: the site should
// always begin at the very top. Clearing the hash before layout is the only
// reliable way — re-scrolling afterwards fights the browser's anchor handling.
(function(){
  if (location.hash === '#invitation' || location.hash === '#rsvp') {
    history.replaceState(null, '', location.pathname + location.search);
  }
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  document.addEventListener('DOMContentLoaded', () => window.scrollTo(0, 0));
  window.addEventListener('load', () => {
    const html = document.documentElement;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.scrollTop = document.body.scrollTop = 0;
    html.style.scrollBehavior = '';
  });
})();

// Envelope opening screen. Shown on every visit — it's part of the ritual.
const envelope = document.querySelector('#envelope');
if (envelope) {
 document.body.classList.add('env-locked');
 const open = () => {
   if (envelope.classList.contains('open')) return;
   envelope.classList.add('open');
   window.scrollTo(0, 0);
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
 const drinksOf = id => [...form.querySelectorAll(`input[name="${id}-drinks"]:checked`)].filter(c => !c.disabled).map(c => c.dataset.drink || c.parentElement.textContent.trim());
 const guestData = id => ({ name: '', attending: val(id+'-attending'), night: val(id+'-night'), travel: val(id+'-travel'), seats: val(id+'-seats'), from: val(id+'-from'), drinks: drinksOf(id), food: val(id+'-food') });
 const guests = [];
 document.querySelectorAll('#guests > fieldset:not([data-plus])').forEach((fs, i) => {
   const data = guestData('g'+i);
   const legend = fs.querySelector('legend').textContent;
   data.name = val('guest-name') || (legend === 'Анкета' ? '' : legend);
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
   status.textContent = T().demo;
   return;
 }
 const button = form.querySelector('button[type="submit"]');
 button.disabled = true;
 status.textContent = T().sending;
 try {
   await fetch(RSVP_ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(collect(form)) });
   form.reset();
   render();
   status.textContent = T().ok;
 } catch (e) {
   status.textContent = T().fail;
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
  const track=g.querySelector('.pg-track'); const dots=g.querySelector('.pg-dots');
  const originals=[...track.children];
  const firstClone=originals[0].cloneNode(true), lastClone=originals[originals.length-1].cloneNode(true);
  firstClone.setAttribute('aria-hidden','true'); lastClone.setAttribute('aria-hidden','true');
  track.appendChild(firstClone); track.insertBefore(lastClone,originals[0]);
  const slides=originals;
  const counter=document.createElement("p"); counter.className="pg-counter"; counter.setAttribute("aria-label", currentLang==='en' ? 'Photo number' : 'Номер фотографии'); g.appendChild(counter);
  let idx=0, physicalIndex=1, timer=null, snapping=false;
  slides.forEach((_,i)=>{const b=document.createElement('button'); b.type='button'; b.setAttribute('role','tab'); b.setAttribute('aria-label',(currentLang==='en' ? 'Photo ' : 'Фото ')+(i+1)); b.addEventListener('click',()=>{go(i); restart();}); dots.appendChild(b);});
  const btns=[...dots.children];
  function go(n){
    const raw=n; idx=(n+slides.length)%slides.length;
    physicalIndex=raw>=slides.length?slides.length+1:raw<0?0:idx+1;
    counter.textContent=String(idx+1).padStart(2,"0")+" / "+String(slides.length).padStart(2,"0");
    track.style.transform='translateX('+(-physicalIndex*100)+'%)';
    btns.forEach((b,i)=>b.setAttribute('aria-selected', i===idx?'true':'false'));
  }
  track.addEventListener('transitionend',e=>{
    if(e.target!==track||snapping)return;
    if(physicalIndex===0||physicalIndex===slides.length+1){
      snapping=true; track.style.transition='none'; physicalIndex=physicalIndex===0?slides.length:1;
      track.style.transform='translateX('+(-physicalIndex*100)+'%)'; track.offsetWidth;
      requestAnimationFrame(()=>{track.style.transition='';snapping=false;});
    }
  });
  const isPhone = matchMedia('(max-width: 700px), (hover: none) and (pointer: coarse)');
  function restart(){clearInterval(timer); timer=null; if(!isPhone.matches) timer=setInterval(()=>go(idx+1), 3800);}
  g.querySelector('.pg-prev').addEventListener('click',()=>{go(idx-1); restart();});
  g.querySelector('.pg-next').addEventListener('click',()=>{go(idx+1); restart();});
  let sx=0, sy=0; track.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true}); track.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy; if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)*1.2) {go(idx+(dx<0?1:-1)); restart();}});
  g.addEventListener('mouseenter',()=>clearInterval(timer)); g.addEventListener('mouseleave',restart);
  isPhone.addEventListener('change',restart);
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
 const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
 let frame = 0;
 const move = () => {
   const r = tl.getBoundingClientRect();
   const vh = window.innerHeight;
   let p = (vh * 0.9 - r.top) / (r.height + vh * 0.75);
   p = Math.max(0, Math.min(1, p));
   const pt = path.getPointAtLength(p * len);
   if (!reduceMotion.matches) {
     const revealed = Math.max(0, Math.min(100, (pt.y / vb.height) * 100));
     svg.style.clipPath = `inset(0 0 ${100 - revealed}% 0)`;
   } else {
     svg.style.clipPath = 'none';
   }
   heart.style.left = (pt.x * (r.width / vb.width)) + 'px';
   heart.style.top = (pt.y * (r.height / vb.height)) + 'px';
 };
 const scheduleMove = () => {
   if (frame) return;
   frame = requestAnimationFrame(() => { frame = 0; move(); });
 };
 addEventListener('scroll', scheduleMove, { passive: true });
 addEventListener('resize', move);
 move();
})();
