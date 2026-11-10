/* Retired service worker.
   Earlier versions of CPO English Drill cached the app for offline use. That has been removed so the
   latest version (and any ads) always load from the network. This file stays in place only so that a
   browser which still has the old worker installed fetches this one, which clears the old cache and
   removes itself. After that nothing is cached and no service worker is registered. */
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.registration.unregister(); })
      .then(function () { return self.clients.matchAll({ type: "window" }); })
      .then(function (clients) { clients.forEach(function (c) { c.navigate(c.url); }); })
  );
});
