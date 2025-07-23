self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("magic-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/wallet.js",
        "/wallets.js",
        "/.env.js",
        "/manifest.json",
        "/apple-touch-icon.png",
        "/icon-512x512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
