/* Cache de la app: evita que cambiar de página (Inicio/Notas/Recordatorios/
   Tablas) dispare una descarga completa cada vez. Estrategia stale-while-
   revalidate para todo lo propio del sitio -> responde al instante desde
   caché si existe, y en paralelo la actualiza para la próxima visita.
   Firebase (auth/Firestore/gstatic) es de otro origen y no se toca acá. */

const CACHE_VERSION = 'v1';
const CACHE_NAME = 'tutor-cache-' + CACHE_VERSION;

const PRECACHE_URLS = [
  'inicio.html',
  'notas.html',
  'recordatorios.html',
  'tablas_frecuencia.html',
  'assets/theme.css',
  'assets/icons.js',
  'assets/auth.js',
  'assets/sync.js',
  'assets/firebase.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((nombres) => Promise.all(
        nombres.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(req).then((cached) => {
        const enRed = fetch(req).then((res) => {
          if (res.ok) cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
        return cached || enRed;
      })
    )
  );
});
