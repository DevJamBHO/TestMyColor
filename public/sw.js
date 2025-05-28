const CACHE_NAME = 'test-my-color-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Ressources à mettre en cache immédiatement
const STATIC_RESOURCES = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.ico',
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/apple-touch-icon.png',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png',
    '/og-image.jpg',
    '/twitter-image.jpg',
    '/sitemap.xml',
    '/robots.txt'
];

// Installation du Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(STATIC_RESOURCES);
            })
    );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Stratégie de cache : Cache First, then Network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Retourne la ressource du cache si elle existe
                if (response) {
                    return response;
                }

                // Sinon, fait la requête réseau
                return fetch(event.request)
                    .then(response => {
                        // Vérifie si la réponse est valide
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone la réponse car elle ne peut être utilisée qu'une fois
                        const responseToCache = response.clone();

                        // Met en cache la nouvelle ressource
                        caches.open(DYNAMIC_CACHE)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(() => {
                        // En cas d'erreur réseau, on peut retourner une page de fallback
                        if (event.request.mode === 'navigate') {
                            return caches.match('/');
                        }
                    });
            })
    );
});

// Gestion des mises à jour
self.addEventListener('message', event => {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
}); 