const version = '1.0.1';

// On install - the application shell cached
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('sw-cache').then(function(cache) {
            return cache.addAll(["./index.html","./master.css"]);
        })
    );
});

// With network request
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});