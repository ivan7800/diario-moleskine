// Service Worker — Diario Moleskine v2.4
// Estrategia cache-first. Sin dependencias externas.
// Los datos del usuario viven en IndexedDB, no aquí.

const CACHE_VERSION = 'v9';
const CACHE_NAME = `diario-moleskine-${CACHE_VERSION}`;

const ASSETS = [
  './index.html',
  './moleskine-diary.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png'
];

// INSTALAR: precachear todos los assets críticos
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => {
        console.log('[SW] Assets precacheados correctamente');
        // NO hacemos skipWaiting() automático para no interrumpir sesiones activas.
        // El cliente puede enviar SKIP_WAITING cuando esté listo.
      })
      .catch((err) => {
        console.error('[SW] Error en precaché:', err);
        self.clients.matchAll().then(clients =>
          clients.forEach(c => c.postMessage({ type: 'SW_INSTALL_ERROR' }))
        );
      })
  );
});

// ACTIVAR: limpiar cachés de versiones anteriores
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((k) => k.startsWith('diario-moleskine-') && k !== CACHE_NAME)
          .map((k) => {
            console.log('[SW] Eliminando caché antigua:', k);
            return caches.delete(k);
          })
      ))
      .then(() => self.clients.claim())
  );
});

// FETCH: cache-first para assets propios. Sin peticiones a terceros.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Solo manejar peticiones del mismo origen
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      // No está en caché: buscar en red y guardar para la próxima vez
      return fetch(e.request).then((res) => {
        if (!res || res.status !== 200 || res.type === 'error') return res;
        const copy = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(e.request, copy));
        return res;
      });
    })
  );
});

// MENSAJE: el cliente puede pedir skipWaiting cuando no haya cambios pendientes
self.addEventListener('message', (e) => {
  if (e.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
