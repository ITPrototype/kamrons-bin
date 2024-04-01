const cacheName = 'kamrons-bin-v1';
const cacheFiles = [
  '/index.html',
  '/convert.html',
  '/app.js', // Your JavaScript file
  '/manifest.json',
  '/icon-152x152.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => cache.addAll(cacheFiles))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
