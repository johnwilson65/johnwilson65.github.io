// Kill-switch service worker - unregisters itself and clears caches
self.addEventListener('install', function(e){self.skipWaiting();});
self.addEventListener('activate', function(e){
  e.waitUntil(
    Promise.all([
      self.registration.unregister(),
      caches.keys().then(function(ks){return Promise.all(ks.map(function(k){return caches.delete(k);}));}),
      self.clients.matchAll({type:'window'}).then(function(cs){cs.forEach(function(c){c.navigate(c.url);});})
    ])
  );
});
