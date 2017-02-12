importScripts('/sw/sw-helpers/sw-lib.js');

goog.swlib.cacheRevisionedAssets([
  {
    url: '/',
    revision: '1'
  },
  {
    url: '/play',
    revision: '2'
  }
]);

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
goog.swlib.router.registerRoute('/', goog.swlib.cacheFirst({
  cacheName: goog.swlib._revisionedCacheManager.getCacheName(),
}));
goog.swlib.router.registerRoute('/play', goog.swlib.cacheFirst({
  cacheName: goog.swlib._revisionedCacheManager.getCacheName(),
}));
goog.swlib.router.registerRoute(
  /https:\/\/images.pexels.com\//, goog.swlib.cacheFirst());