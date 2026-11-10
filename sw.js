/* CPO English Drill — service worker.
   Caches the app so it opens instantly and works with no internet.
   Strategy: serve from the cache first, and quietly refresh the cache in the background
   (a conditional request, so an unchanged 1.3 MB page costs almost no data).
   When you release a new version, bump CACHE_VERSION so old caches are cleared. */
const CACHE_VERSION = "v1";
const CACHE = "cpo-english-drill-" + CACHE_VERSION;
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      // add one by one so a single missing file never blocks the install
      return Promise.all(SHELL.map(function (url) {
        return cache.add(url).catch(function () { /* ignore */ });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) {
        return k.indexOf("cpo-english-drill-") === 0 && k !== CACHE;
      }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never touch other sites (e.g. ads, analytics)

  const isPage = req.mode === "navigate";
  event.respondWith(
    caches.open(CACHE).then(function (cache) {
      const key = isPage ? "./index.html" : req;
      return cache.match(key, { ignoreSearch: true }).then(function (cached) {
        const refresh = fetch(req, { cache: "no-cache" }).then(function (res) {
          if (res && res.ok) cache.put(key, res.clone());
          return res;
        }).catch(function () { return null; });
        if (cached) {
          event.waitUntil(refresh); // update in the background
          return cached;
        }
        return refresh.then(function (res) {
          return res || (isPage ? cache.match("./index.html") : Response.error());
        });
      });
    })
  );
});
