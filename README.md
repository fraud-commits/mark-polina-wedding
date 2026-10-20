# Марк и Полина · 26 июня 2027

Статический сайт-приглашение. HTML, CSS и JavaScript без сборки и зависимостей.

## Деплой

| | |
|---|---|
| Основной | https://mark-polina-wedding.vercel.app/ — сюда рассылать гостям |
| Резервный | https://fraud-commits.github.io/mark-polina-wedding/ |
| Репозиторий | `fraud-commits/mark-polina-wedding`, ветка `main` |

Версия сайта — в атрибутах `?v=` у ссылок на `styles.css` и `app.js` в `index.html`.
Оба хостинга тянут одну и ту же ветку, поэтому версии должны совпадать.

## Структура

```
index.html                 разметка всех блоков
styles.css                 весь CSS (в конце — палитра, paper-hero, правки последних версий)
app.js                     приглашения по токенам, логика RSVP, конверт, галерея, таймлайн
calla-single.svg           калла на первом экране
hero-calla-reference.png   фото каллы
paper-cotton.png           текстура бумаги в конверте
dresscode-reference.jpg    коллаж образов (lazy)
1.jpg 2.jpg 3.jpg 4.jpg    галерея площадки (в порядке: шатёр → стеклянный зал → вечер → терраса)
seal.png                   печать на конверте
google-apps-script.gs      код Apps Script для приёма анкет
```

## Анкеты (RSVP)

Форма шлёт `POST` в Apps Script, скрипт пишет строки в Google Sheets.

- Endpoint: `https://script.google.com/macros/s/AKfycbzJxggv3SwYO9BNySjITeN1jpRghemR-Nsg4r2yFIR1emaxTdOcH_IvkpqwgipiEIfckg/exec`
- Таблица: https://docs.google.com/spreadsheets/d/1eB8QtZ3S_JkcgEYD0WeOa1g84fVLZr0AKRN-ucqilKk/edit (вкладка «Ответы»)
- Одна строка — один человек. Напитки — отдельные колонки с флагами `1`. Спутник — префикс `+1 к `.
- Значения пишутся **по именам колонок**, а не по номерам, поэтому старые или лишние колонки не сдвигают данные.
- Пустые колонки `Пиво` и `Крепкий уточнение` удаляются скриптом автоматически.

### Как обновить скрипт

1. Apps Script → проект → вкладка **Код** → `Code.gs` → вставить содержимое `google-apps-script.gs` → сохранить
2. **Deploy → Manage deployments** → Edit → **Version: New version** → **Deploy**

`doGet` намеренно не возвращает данные анкет — по ссылке скрипта их прочитать нельзя.

## Персональные ссылки

Гость открывает `?g=<token>#invitation` и видит своё приветствие, состав группы и нужные поля.
Токены — в `app.js`, объект `invitations` (25 гостей). Старые короткие ссылки работают через `legacy`.

## Локальный просмотр

```
python -m http.server 4181 --bind 127.0.0.1
```

## Перед рассылкой

- Ответьте себе, что «только для взрослых» (если да — убрать детские поля из `app.js`)
- Срок ответа в анкете сейчас «1 января 2027» — проверьте, подходит ли
- Программа предварительная, окончательные тайминги — после разговора с ведущим
