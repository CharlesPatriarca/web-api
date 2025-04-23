self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('v1').then(cache => cache.addAll([
        '/',
        '/index.html',
        '/style.min.css',
        '/script.min.js',
        '/icons/icon-192x192.png'
      ]))
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(resp => resp || fetch(e.request))
    );
  });
  