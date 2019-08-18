/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "1600b37ff53a0103271a3ee72af02b2d"
  },
  {
    "url": "build/p-0eutc65p.entry.js"
  },
  {
    "url": "build/p-549b16dd.js"
  },
  {
    "url": "build/p-a0c82e31.js"
  },
  {
    "url": "build/p-f5cc54d5.js"
  },
  {
    "url": "build/p-f7ddb189.js"
  },
  {
    "url": "styles/before-load.css",
    "revision": "0ceabac09ca8e977ac180a95f129d70f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
