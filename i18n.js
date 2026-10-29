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
  'Открыть приглашение': 'Open the invitation',
  'НАЧАЛО НАШЕЙ ИСТОРИИ': 'THE BEGINNING OF OUR STORY',

  // письмо
  'Мы долго думали, что написать в приглашении, чтобы было красиво, оригинально и не как у всех.': 'We spent a long time wondering what to write in this invitation: something beautiful, original and unlike all the others.',
  'В итоге решили просто сказать: у нас намечается важный день, и нам очень хочется разделить его с вами.': 'In the end, we decided to keep it simple. We have an important day coming up, and we would love to share it with you.',
  'В итоге решили просто сказать: у нас намечается важный день, и нам очень хочется разделить его с тобой.': 'In the end, we decided to keep it simple. We have an important day coming up, and we would love to share it with you.',

  'Приглашаем вас на нашу свадьбу!': 'We invite you to our wedding!',
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
  'Dunduriņi — встречаемся в 15:00': 'Dunduriņi — we meet at 3:00 pm',
  'Ārlavas pagasts, Talsu novads, Латвия — на берегу озера Сасмакас, в старом парке.':
    'Ārlavas pagasts, Talsu novads, Latvia — on the shore of Lake Sasmakas, in the old park.',
  'Юрмала — 100 км': 'Jurmala — 100 km',
  'Рига — 135 км': 'Riga — 135 km',
  'Мажейкяй — 140 км': 'Mažeikiai — 140 km',
  'Вильнюс — 390 км': 'Vilnius — 390 km',
  'Лондон — ✈ 1600 км': 'London — ✈ 1600 km',
  'Амстердам — ✈ 1300 км': 'Amsterdam — ✈ 1300 km',
  'Подгорица — ✈ 1700 км': 'Podgorica — ✈ 1700 km',
  'Турин — ✈ 1700 км': 'Turin — ✈ 1700 km',
  'Марсель — ✈ 2000 км': 'Marseille — ✈ 2000 km',
  'Лимасол — ✈ 2600 км': 'Limassol — ✈ 2600 km',
  'Тенерифе — ✈ 4400 км': 'Tenerife — ✈ 4400 km',
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
  'Заезд гостей': 'Guests arrive',
  'Заселение в гостевой дом,': 'Check in at the guest house,',
  'знакомство и общение': 'introductions and time to catch up',
  'Сбор гостей': 'Guests gather',
  'Welcome и приветствие': 'Welcome and greeting',
  'Церемония': 'The ceremony',
  'Самые важные слова': 'The most important words',
  'в окружении близких': 'surrounded by the people we love',
  'Ужин': 'Dinner',
  'Праздничная программа': 'Evening programme',
  'Торт и танцы': 'Cake and dancing',
  'Музыка, улыбки': 'Music, smiles',
  'и танцы до утра': 'and dancing until morning',

  // дресс-код
  'ДРЕСС-КОД': 'DRESS CODE',
  'Будет': 'Look',
  'красиво': 'beautiful',
  'Нам будет приятно, если вы поддержите палитру праздника. Но это всего лишь пожелание — выбирайте тот цвет и тот наряд, в котором вы будете чувствовать себя по-настоящему красиво и комфортно. И ещё одно маленькое пожелание: лучше обойтись без очень тёмных оттенков — стены зала тоже тёмные, и на фотографиях тёмные силуэты могут немного теряться на общем фоне.':
    'We would love you to take inspiration from the wedding palette, but it is only a suggestion. Choose the colour and outfit that make you feel comfortable and look your best. One small request: please avoid very dark shades. The hall has dark walls, so dark outfits may blend into the background in photos.',
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
    'Everyone is welcome to stay after the wedding. Overnight accommodation will be available at Dunduriņi. Let us know in your RSVP, and we will arrange everything.',
  'А на следующий день — купаться в озере, загорать и никуда не спешить: тут есть лодки, SUP-доски, катамаран, сауна и кубль у воды. Не забудьте купальники и полотенца!':
    'Spend the next day swimming in the lake, sunbathing and taking it easy. There are boats, SUP boards, a catamaran, a sauna and a hot tub by the water. Do not forget your swimwear and towels!',

  // пожелания
  'ПОЖЕЛАНИЯ': 'WISHES',
  'Самое ценное — вы': 'Having you with us matters most',
  'Ваше присутствие — самый большой подарок для нас.': 'Your presence is the greatest gift for us.',
  'Если хотите порадовать нас ещё больше, мы будем благодарны': 'If you would like to give us something more, we would be grateful',
  'за вклад в наше общее будущее.': 'for a contribution towards our future together.',
  'А вместо цветов можно подарить нам лотерейный билет —': 'Instead of flowers, you could give us a lottery ticket —',
  'вдруг именно ваш окажется счастливым.': 'perhaps yours will be the lucky one.',

  // анкета
  'ЖДЁМ ВАШЕЙ АНКЕТЫ': 'WE ARE LOOKING FORWARD TO YOUR REPLY',
  'Вы с нами?': 'Will you join us?',
  'Несколько деталей помогут нам': 'A few details will help us',
  'позаботиться о каждом.': 'take care of everyone.',
  'Ответ очень ждём до': 'We would love to hear from you by',
  '1 января 2027': '1 January 2027',
  '— так мы всё успеем организовать.': 'so that we can organise everything in time.',
  'Пожелания или вопрос': 'Wishes or a question',
  'Здесь можно написать нам': 'You can write to us here',
  'Ответ увидим только мы — и обязательно всё учтём.': 'Only the two of us will see your reply, and we will make sure to take it into account.',
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
