/* global workbox */
workbox.core.setCacheNameDetails({prefix: 'streaks'});

workbox.googleAnalytics.initialize();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
