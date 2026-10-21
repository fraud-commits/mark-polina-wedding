/**
 * Приёмник фотографий гостей — Mark & Polina, 26.06.2027.
 *
 * Разворачивание (если нужно с нуля):
 *   script.google.com → новый проект → вставить этот файл → Развёртывание →
 *   веб-приложение: «Выполнять от моего имени», доступ «Все» → скопировать URL.
 *
 * Первым делом один раз открыть: <URL>?action=init
 *   — создаст папку Drive «Фото гостей Mark&Polina», откроет доступ по ссылке
 *   — вернёт JSON с folderId (вставить в константу ниже и обновить развёртывание)
 */

const FOLDER_ID = '1l9eiDECOg6U0ZUPkKc43PajX7WNyej0_'; // папка «Фото гостей Mark&Polina»

const MIME = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getFolder() {
  if (FOLDER_ID) return DriveApp.getFolderById(FOLDER_ID);
  const folders = DriveApp.getFoldersByName('Фото гостей Mark&Polina');
  return folders.hasNext() ? folders.next() : DriveApp.createFolder('Фото гостей Mark&Polina');
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const data = String(body.data || '').replace(/^data:[^,]*,/, '');
    if (!data) return jsonOut({ ok: false, error: 'no data' });

    const token = String(body.token || 'default').replace(/[^a-z0-9-]/gi, '');
    // если имя не указано — оставляем описание пустым (LED покажет «инкогнито»)
    const who = String(body.name || '').trim().slice(0, 120);

    const blob = Utilities.newBlob(Utilities.base64Decode(data),
                                   'image/jpeg',
                                   token); //_DRIVE: имя подменяется ниже

    const d = new Date();
    const stamp = Utilities.formatDate(d, 'Europe/Riga', 'yyyyMMdd-HHmmss-SSS');
    const file = getFolder()
      .createFile(blob)
      .setName(stamp + '__' + token + '.jpg')
      .setDescription(who);

    return jsonOut({ ok: true, id: file.getId() });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err && err.message || err) });
  }
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  const action = String(p.action || 'list');

  if (action === 'init') {
    const f = getFolder();
    f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return jsonOut({ ok: true, folderId: f.getId(), folderURL: f.getUrl() });
  }

  if (action === 'ping') return jsonOut({ ok: true, folderId: FOLDER_ID || null, time: new Date() });

  // По умолчанию: список последних фотографий (новые первыми).
  const limit = Math.min(Number(p.limit) || 300, 1000);
  const fld = FOLDER_ID ? DriveApp.getFolderById(FOLDER_ID) : getFolder();
  const it = fld.getFilesByType(MimeType.JPEG);
  const items = [];
  let n = 0;
  while (it.hasNext() && n++ < limit) {
    const f = it.next();
    items.push({
      id: f.getId(),
      name: f.getName(),
      g: (f.getName().split('__')[1] || '').replace(/\.jpg$/, ''),
      who: f.getDescription() || '',
      t: f.getDateCreated().getTime()
    });
  }
  items.sort((a, b) => b.t - a.t);
  return jsonOut({ ok: true, count: items.length, items: items });
}
