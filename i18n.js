// Переключатель языка: русский ↔ английский.
// Русский текст остаётся в index.html — здесь только английский словарь и движок подмены.
// Гости, которым нужен английский (Милош и Даша, Виталий и Баша, Томс и Наташа),
// получают английскую версию автоматически по своей ссылке.

const I18N_EN = {
  // шапка и конверт
  'Марк и Полина · 26 июня 2027': 'Mark & Polina · 26 June 2027',
  'Коснитесь печати, чтобы открыть': 'Touch the seal to open',
  'Марк & Полина': 'Mark & Polina',
  'ПРИГЛАШЕНИЕ НА СВАДЬБУ': 'WEDDING INVITATION',
  'Место': 'Venue',
  'Программа': 'Schedule',
  'Анкета': 'RSVP',
  'Разделы': 'Sections',

  // первый экран
  'ПРИГЛАШАЕМ НА НАШУ СВАДЬБУ': 'WE INVITE YOU TO OUR WEDDING',
  'Марк': 'Mark',
  'Полина': 'Polina',
  'М': 'M',
  'П': 'P',
  'DUNDURIŅI · ЛАТВИЯ': 'DUNDURIŅI · LATVIA',
  'Мы выбираем друг друга.': 'We chose each other.',
  'И хотим разделить этот день с вами.': 'And we would love to share this day with you.',
  'Открыть приглашение': 'Open the invitation',
  'НАЧАЛО НАШЕЙ ИСТОРИИ': 'THE BEGINNING OF OUR STORY',

  // письмо
  'САМОЕ ВАЖНОЕ — БЫТЬ РЯДОМ': 'THE MOST IMPORTANT THING IS TO BE THERE',
  'Есть дни, которые становятся частью нашей истории.': 'There are days that become part of our story.',
  'Мы будем счастливы, если в этот день вы будете рядом\u00a0—\u00a0обниматься, улыбаться и танцевать вместе с нами.': 'We would be so happy to have you with us that day — to hug, smile and dance together.',
  'Приглашаем вас на нашу свадьбу.': 'We invite you to our wedding.',
  'С любовью, Марк и Полина': 'With love, Mark and Polina',

  // календарь
  'СОХРАНИТЕ ДАТУ': 'SAVE THE DATE',
  'Июнь 2027': 'June 2027',
  'Пн': 'Mo', 'Вт': 'Tu', 'Ср': 'We', 'Чт': 'Th', 'Пт': 'Fr', 'Сб': 'Sa', 'Вс': 'Su',
  'суббота · DUNDURIŅI · ЛАТВИЯ': 'saturday · DUNDURIŅI · LATVIA',
  'Календарь на июнь 2027, свадьба 26 июня': 'Calendar for June 2027, the wedding on 26 June',

  // место
  'МЕСТО ВСТРЕЧИ': 'WHERE WE MEET',
  'Там начинается': 'That is where',
  'праздник': 'the celebration begins',
  'Парк, озеро Сасмакас и светлый зал со стеклянными стенами — место для долгих разговоров и счастливых воспоминаний.':
    'A park, Lake Sasmakas and a light hall with glass walls — a place for long conversations and happy memories.',
  'Ārlavas pagasts, Talsu novads, Латвия — на берегу озера Сасмакас, в старом парке у трассы Талсы–Роя. От трассы до площадки — 1,5 км по земляной дороге.':
    'Ārlavas pagasts, Talsu novads, Latvia — on the shore of Lake Sasmakas, in the old park by the Talsi–Roja road. The last stretch to the venue is 1.5 km of dirt road.',
  'Юрмала — 100 км': 'Jurmala — 100 km',
  'Рига — 135 км': 'Riga — 135 km',
  'Мажейкяй — 140 км': 'Mažeikiai — 140 km',
  'Вильнюс — 390 км': 'Vilnius — 390 km',
  'Лондон — ✈ 1600 км': 'London — ✈ 1600 km',
  'Подгорица — ✈ 1700 км': 'Podgorica — ✈ 1700 km',
  'Турин — ✈ 1700 км': 'Turin — ✈ 1700 km',
  'Марсель — ✈ 2000 км': 'Marseille — ✈ 2000 km',
  'Лимасол — ✈ 2600 км': 'Limassol — ✈ 2600 km',
  'Фотографии площадки Dunduriņi': 'Photos of the Dunduriņi venue',
  'Предыдущее фото': 'Previous photo',
  'Следующее фото': 'Next photo',
  'Навигация по фото': 'Photo navigation',
  'Откуда приедут гости: расстояния до Dunduriņi': 'Where our guests will come from: distances to Dunduriņi',
  'Гости на территории Dunduriņi — вид на парк и озеро': 'Guests on the grounds of Dunduriņi — a view over the park and the lake',
  'Стеклянный зал Dunduriņi и деревянная палуба': 'The glass hall of Dunduriņi and the wooden deck',
  'Dunduriņi вечером — тёплая подсветка зала': 'Dunduriņi in the evening — the hall glowing warmly',
  'Терраса у озера Сасмакас с фонарями': 'The terrace by Lake Sasmakas with lanterns',

  // программа
  'НАШ ДЕНЬ': 'OUR DAY',
  'Каждому моменту — своё время': 'Every moment has its own time',
  'Время пока предварительное — окончательное расписание пришлём ближе к дате. Церемония — на природе, у озера: в случае дождя всё легко переносим в стеклянный зал.':
    'The timings are tentative — we will send the final schedule closer to the date. The ceremony takes place outdoors, by the lake; in case of rain we can easily move it into the glass hall.',
  'Сбор гостей': 'Guests arrive',
  'Первые объятия': 'First hugs',
  'и приветственные бокалы': 'and a welcome toast',
  'Церемония': 'The ceremony',
  'Самые важные слова': 'The most important words',
  'в окружении близких': 'surrounded by the people we love',
  'Ужин и программа': 'Dinner and the party',
  'Тёплые пожелания, тосты': 'Warm wishes and toasts',
  'и праздничный ужин': 'and a celebratory dinner',
  'Танцы': 'Dancing',
  'Музыка, улыбки': 'Music, smiles',
  'и танцы до утра': 'and dancing until morning',

  // дресс-код
  'ДРЕСС-КОД': 'DRESS CODE',
  'Будет': 'Look',
  'красиво': 'beautiful',
  'Нам будет приятно, если вы поддержите палитру праздника. Но это всего лишь пожелание — выбирайте тот цвет и тот наряд, в котором вы будете чувствовать себя по-настоящему красиво и комфортно. И ещё одно маленькое пожелание: лучше обойтись без очень тёмных оттенков — стены зала тоже тёмные, и на фотографиях тёмные силуэты могут немного теряться на общем фоне.':
    'We would love it if you supported the colour palette of the day. But it is only a wish — choose whatever colour and whatever outfit makes you feel truly beautiful and comfortable. And one small wish: do try to avoid very dark shades — the walls of the hall are dark too, and on photos dark silhouettes can fade into the interior a little.',
  'Церемония на природе: выбирайте удобную обувь и возьмите тёплый слой на вечер.':
    'The ceremony is outdoors: pick comfortable shoes and bring a warm layer for the evening.',
  'Посмотреть примеры образов': 'See outfit inspiration',
  'Для девушек': 'For the ladies',
  'Зелёная гамма': 'Green tones',
  'Шалфей · хаки · эвкалипт': 'Sage · khaki · eucalyptus',
  'Шалфей, хаки, светлый эвкалипт, олива — струящиеся ткани, без чёрного и белого.':
    'Sage, khaki, light eucalyptus and olive — flowing fabrics, no black or white.',
  'Тёплые нейтрали': 'Warm neutrals',
  'Песочный · коричневый': 'Sand · brown',
  'Шампань, песочный, светлый тауп и карамель — льняные костюмы и платья.':
    'Champagne, sand, light taupe and caramel — linen suits and dresses.',
  'Мягкая пастель': 'Soft pastel',
  'Пыльная роза': 'Dusty rose',
  'Пыльная роза, пудровый, лиловый и нюд — нежная альтернатива, отлично сочетается с зеленью.':
    'Dusty rose, powder, lilac and nude — a soft alternative that pairs beautifully with green.',
  'Воздушные голубые': 'Airy blues',
  'Дымчато-голубой · серо-голубой': 'Smoky blue · grey-blue',
  'Лёгкие платья и рубашки: дымчато-голубой, серо-синий, дымка — свежо на фоне парка.':
    'Light dresses and shirts: smoky blue, grey-blue and haze — fresh against the greenery of the park.',
  'Для парней': 'For the gentlemen',
  'Светлая рубашка + брюки': 'Light shirt + trousers',
  'Те же оттенки, что и для девушек, — подойдёт любая рубашка из лёгкой ткани (лён/хлопок) и брюки в светлых или нейтральных тонах: шампань, песочный, эвкалипт, голубой, шалфей, коричневый или хаки.':
    'The same shades as for the ladies — any shirt in a light fabric (linen or cotton) and trousers in light or neutral tones will work: champagne, sand, eucalyptus, blue, sage, brown or khaki.',
  'Как это может выглядеть вместе': 'How it can look together',
  'Палитра для нарядов гостей: шампань, песочный, пыльная роза, дымчато-голубой, голубовато-серый, светлый эвкалипт, шалфейный, хаки, лесной, коричневый — оттенки сгруппированы по цветовым семействам':
    'Guest outfit palette: champagne, sand, dusty rose, smoky blue, blue-grey, light eucalyptus, sage, khaki, forest, brown — grouped by colour family',
  'Примеры образов в палитре праздника: платья и рубашки в песочных, зелёных, голубых и розовых оттенках':
    'Examples of outfits in the palette of the day: dresses and shirts in sand, green, blue and rose tones',
  'Шампань': 'Champagne', 'Песочный': 'Sand', 'Пыльная роза': 'Dusty rose',
  'Дымчато-голубой': 'Smoky blue', 'Голубовато-серый': 'Blue-grey', 'Светлый эвкалипт': 'Light eucalyptus',
  'Шалфейный': 'Sage', 'Хаки': 'Khaki', 'Лесной': 'Forest', 'Коричневый': 'Brown',
  'Шалфей': 'Sage', 'Олива': 'Olive', 'Припылённая мята': 'Dusty mint', 'Светлый тауп': 'Light taupe',
  'Карамельный': 'Caramel', 'Пудровый': 'Powder', 'Пыльный лиловый': 'Dusty lilac', 'Нюд': 'Nude',
  'Пыльный небесный': 'Dusty sky', 'Серо-синий': 'Grey-blue', 'Дымка': 'Haze', 'Голубой': 'Blue',

  // после праздника
  'ПОСЛЕ ПРАЗДНИКА': 'AFTER THE CELEBRATION',
  'Ещё один день': 'One more day',
  'вместе': 'together',
  'Остаться после свадьбы могут все — ночёвка будет на территории Dunduriņi. Отметьте это в анкете, и мы всё организуем.':
    'Anyone can stay after the wedding — the night stay will be on the grounds of Dunduriņi. Mark it in your RSVP and we will arrange everything.',
  'А на следующий день — купаться в озере, загорать и никуда не спешить: тут есть лодки, SUP-доски, катамаран, сауна и кубль у воды. Не забудьте купальники и полотенца!':
    'And the next day — swimming in the lake, sunbathing and nowhere to rush: there are boats, SUP boards, a catamaran, a sauna and a tub by the water. Do not forget your swimwear and towels!',

  // пожелания
  'ПОЖЕЛАНИЯ': 'WISHES',
  'Самое ценное — вы': 'The most precious thing is you',
  'Ваше присутствие — самый большой подарок для нас.': 'Your presence is the greatest gift for us.',
  'Если хотите порадовать нас ещё больше, мы будем благодарны': 'If you would like to delight us even more, we will be grateful',
  'за вклад в наше общее будущее.': 'for a contribution to our shared future.',
  'А вместо цветов можно подарить нам лотерейный билет —': 'And instead of flowers you may give us a lottery ticket —',
  'вдруг именно ваш билет окажется счастливым.': 'maybe yours will be the lucky one.',

  // анкета
  'ЖДЁМ ВАШЕЙ АНКЕТЫ': 'WE ARE LOOKING FORWARD TO YOUR REPLY',
  'Вы с нами?': 'Will you join us?',
  'Несколько деталей помогут нам': 'A few details will help us',
  'позаботиться о каждом.': 'take care of everyone.',
  'Ответьте, пожалуйста, до': 'Please reply by',
  '1 января 2027': '1 January 2027',
  '— это поможет нам всё организовать.': 'so that we can organise everything.',
  'Пожелания или вопрос': 'Wishes or a question',
  'Здесь можно написать нам': 'You can write to us here',
  'Ответ увидим только мы — и обязательно всё учтём.': 'Only we will see your reply — and we will take every word into account.',
  'Отправить ответ': 'Send my reply',

  // финал
  'До встречи!': 'See you there!',
  'ДО НАШЕЙ СВАДЬБЫ ОСТАЛОСЬ': 'COUNTING DOWN TO OUR WEDDING',
  'дней': 'days', 'часов': 'hours', 'минут': 'minutes', 'секунд': 'seconds'
};

// Гости, которым английский нужен по умолчанию.
const EN_GUESTS = ['milos-dasha', 'vitaliy-basha', 'toms-natasha'];

const LANG_KEY = 'wedding-lang';
// Флаг «язык выбран вручную переключателем» — тогда сохранённый выбор сильнее
// авто-английского для EN_GUESTS.
const LANG_MANUAL_KEY = 'wedding-lang-manual';
let currentLang = 'ru';

function langParam(){
  const p = new URLSearchParams(location.search);
  return p.get('lang') === 'en' ? 'en' : (p.get('lang') === 'ru' ? 'ru' : '');
}

function resolveLang(){
  const forced = langParam();
  if(forced) return forced;
  const token = new URLSearchParams(location.search).get('g') || '';
  let saved = null;
  let manual = false;
  try{
    saved = localStorage.getItem(LANG_KEY);
    // Ручной выбор переключателем — осознанный, его уважаем всегда.
    manual = localStorage.getItem(LANG_MANUAL_KEY) === '1';
  }catch(e){}
  // Английские пары: гость, который сам не переключал язык, всегда
  // открывается на английском — даже если ранее сохранялся русский
  // (например, с посещения без персональной ссылки).
  if(EN_GUESTS.includes(token)){
    if(manual && (saved === 'en' || saved === 'ru')) return saved;
    return 'en';
  }
  if(saved === 'en' || saved === 'ru') return saved;
  return 'ru';
}

// Оригиналы запоминаем, чтобы вернуть русский текст при обратном переключении.
const origText = new WeakMap();
const origAttrs = new WeakMap();



function translateTree(root){
  const dict = I18N_EN;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node){
      if(!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const el = node.parentElement;
      if(!el) return NodeFilter.FILTER_REJECT;
      if(el.closest('svg, script, style')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n=>{
    if(!origText.has(n)) origText.set(n, n.nodeValue);
    if(currentLang === 'ru'){ n.nodeValue = origText.get(n); return; }
    const raw = n.nodeValue;
    const trimmed = raw.trim();
    if(Object.prototype.hasOwnProperty.call(dict, trimmed)){
      n.nodeValue = raw.replace(trimmed, dict[trimmed]);
    }
  });
}

function translateAttrs(root){
  const dict = I18N_EN;
  root.querySelectorAll('[aria-label],[placeholder],[alt],[title]').forEach(el=>{
    if(!origAttrs.has(el)) origAttrs.set(el, {});
    ['aria-label','placeholder','alt','title'].forEach(a=>{
      const v = el.getAttribute(a);
      if(v === null) return;
      if(!(a in origAttrs.get(el))) origAttrs.get(el)[a] = v;
      if(currentLang === 'ru'){ el.setAttribute(a, origAttrs.get(el)[a]); return; }
      if(Object.prototype.hasOwnProperty.call(dict, v)) el.setAttribute(a, dict[v]);
    });
  });
}

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang === 'en' ? 'en' : 'ru';
  translateTree(document.body);
  translateAttrs(document.body);
  document.title = lang === 'en' ? 'Mark & Polina · 26 June 2027' : 'Марк и Полина · 26 июня 2027';
  // Печать на конверте тоже двуязычная.
  const ruSeal = document.querySelector('[data-seal-ru]');
  const enSeal = document.querySelector('[data-seal-en]');
  if(ruSeal && enSeal){
    ruSeal.hidden = lang === 'en';
    enSeal.hidden = lang !== 'en';
  }
  const btn = document.querySelector('.lang-toggle');
  if(btn){
    btn.textContent = lang === 'en' ? 'RU' : 'EN';
    btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Russian' : 'Switch to English');
  }
  window.dispatchEvent(new CustomEvent('langchange', {detail:{lang}}));
}

function setLang(lang){
  try{ localStorage.setItem(LANG_KEY, lang); localStorage.setItem(LANG_MANUAL_KEY, '1'); }catch(e){}
  // Ручной выбор сильнее параметра в адресе: убираем ?lang=,
  // иначе после обновления страницы язык откатывался к адресному.
  try{
    const u = new URL(location.href);
    if (u.searchParams.has("lang")) {
      u.searchParams.delete("lang");
      history.replaceState(null, "", u.pathname + (u.searchParams.toString() ? "?" + u.searchParams : "") + u.hash);
    }
  }catch(e){}
  applyLang(lang);
}

currentLang = resolveLang();
applyLang(currentLang);

document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.querySelector('.lang-toggle');
  if(btn) btn.addEventListener('click', ()=> setLang(currentLang === 'en' ? 'ru' : 'en'));
});
