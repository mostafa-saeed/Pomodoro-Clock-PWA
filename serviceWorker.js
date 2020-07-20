self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('pomodoroClock').then(function(cache) {
            return cache.addAll([
              '/',
              '/index.html',
              '/assets/img/144.png',
              '/assets/img/favicon.ico',
              '/assets/DIGITALDREAM.ttf',
              '/assets/beep.mp3',
              '/mainfest.json',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
