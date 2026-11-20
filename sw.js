// Guarda o app no aparelho para abrir sem internet.
// Ao publicar uma versão nova do index.html, aumente o número abaixo.
const CACHE = 'financas-v6';
const FILES = ['./', './index.html', './manifest.json',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Só guarda os arquivos do próprio app e as bibliotecas do Firebase (gstatic).
// A sincronização e o login falam direto com o Google, sem passar por aqui.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const mine = url.origin === self.location.origin;
  const lib = url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/');
  if (!mine && !lib) return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || (mine ? caches.match('./index.html') : Response.error())))
  );
});
