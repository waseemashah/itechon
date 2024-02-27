'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "91369eb86537d2e1dfe879627340b0df",
"assets/AssetManifest.bin.json": "5395a7deda8dec82ad1a60a456ff60d1",
"assets/AssetManifest.json": "fdc34978e354d55a59d3f058e0d69877",
"assets/assets/images/about_us_laptop.png": "3ccadf5936af323267379ca2a009c20a",
"assets/assets/images/admin_banner.png": "5ba4ac3d40271b234891d1fa9070571c",
"assets/assets/images/announcement.png": "969a989a861f4c10da38dc3589c25ed8",
"assets/assets/images/arts.png": "b4b68b942e8aa88d2a45b9e327c03c8d",
"assets/assets/images/badminton.png": "5e2cecb4beabe85c0ecf35cfd19fd1cd",
"assets/assets/images/badminton_banner.png": "191a29339f73664f140ee6dc0369222c",
"assets/assets/images/banner_1.png": "a1c54468d56c8f7c4a114b325b79f6f0",
"assets/assets/images/banner_2.png": "ec466fc5a33de598b23724986d215f9e",
"assets/assets/images/banner_3.png": "19c605eda371ebdad06366e947bc0a4d",
"assets/assets/images/book.png": "0ffa2bdb0f2f6f184465657f6d00b0dc",
"assets/assets/images/core_banner.png": "b2c5d215cfd0bc6de2e9d793a2553986",
"assets/assets/images/core_left.png": "89356a570ecf83313ae6c6bb5698a57d",
"assets/assets/images/cricket.png": "8e680b492237e31f53c12762c4e0cd2d",
"assets/assets/images/cricket_banner.png": "2b833e2d2f3bc23c1d52754b74f836fb",
"assets/assets/images/debats.png": "6ad8a7bf2d9283393da8ecca6be4d10b",
"assets/assets/images/debats2.png": "41c43c394ab343b12f763a8cbc07642f",
"assets/assets/images/download_banner.png": "64a679c62ac78a425c2961f89c36d98f",
"assets/assets/images/event_banner.png": "8a272d097981328b7726337fa37c6a33",
"assets/assets/images/final.png": "b2371fff1b2c0b8268a092ab76912c5d",
"assets/assets/images/futsal.png": "b23c44cf91f82e069a519f5ff11a3ce9",
"assets/assets/images/futsal_banner.png": "f1b635751097a58a9cca3e4177066afd",
"assets/assets/images/gallery.png": "461f4e185a97357fe29b2c519812ace0",
"assets/assets/images/gallery_1.png": "74ef6a61e7fc7282869d34a1cea2f293",
"assets/assets/images/gallery_10.png": "b51aaf3fd0abb96315739059a205b42a",
"assets/assets/images/gallery_2.png": "9704199d705c7e22fb78b0829cc6d623",
"assets/assets/images/gallery_3.png": "be12ca895fe48211270baae1efe9e08c",
"assets/assets/images/gallery_4.png": "9bfd7484875a7d36b3fc363830d0af8c",
"assets/assets/images/gallery_5.png": "4875bb2a52dd7e5b82c83d840406f766",
"assets/assets/images/gallery_6.png": "902ffb06c39fa8c1b1b76dafe4ce72ef",
"assets/assets/images/gallery_7.png": "9899716ac3a8b1be89f5f293d279b375",
"assets/assets/images/gallery_8.png": "34244e89f47a5cbc98512161e07636b0",
"assets/assets/images/gallery_9.png": "63946619fc699958e41c4eb32c511ecd",
"assets/assets/images/gaming.png": "4aaad6bd1151f3cb09364e8aafa504b7",
"assets/assets/images/gaming_banner.png": "9baa5f512d271694d50e3f9beb3a70b6",
"assets/assets/images/guitar.png": "b5d25b012d36839868a3d58f041c355f",
"assets/assets/images/landing_page_banner.png": "c113ab385ab43124e77b3e0cfc6b89ef",
"assets/assets/images/literature.png": "74efc7864c12a61d4e59481c0c440f61",
"assets/assets/images/markets.png": "a08ae5ecde59bbe8d0a474644c31fe70",
"assets/assets/images/music.png": "b09be9c11a2370c7f79696d018918538",
"assets/assets/images/outdoorSport.png": "e5bc8a588982e558d19225407e3a7120",
"assets/assets/images/person_card_1.png": "0d3d1b523f12f2c21dde0fe00902f69f",
"assets/assets/images/person_card_2.png": "7f3fd98ef29922be1d4ceae171b8a843",
"assets/assets/images/plus.png": "a9c3f46798f762c7475f070e716b0949",
"assets/assets/images/poetry.png": "16dfe17b72064d29391dd35aec68570d",
"assets/assets/images/poster.png": "6183389503f5aecac3c67f2ed1a28978",
"assets/assets/images/poster_banner.png": "ab0c86da91e4f8b58c3b78346d3375d4",
"assets/assets/images/programming.png": "34d92b307cdf61cae1d6381a7795b3d2",
"assets/assets/images/programming_banner.png": "32c32d25c29655b13b72353bd6440f5d",
"assets/assets/images/quiz.png": "7dc7c8b981185623195ee1f9f4608cbf",
"assets/assets/images/quiz_banner.png": "ccdd41c5ef9fbb50d4e840fc669e37d4",
"assets/assets/images/register.png": "b5aa4814f7fce9fe998fa83aef8d1d60",
"assets/assets/images/seminars.png": "eec27f25e30a76fbd6f498656c14a913",
"assets/assets/images/seminars_banner.png": "afe756e4551ee80a24e42ce8ee03004b",
"assets/assets/images/snooker.png": "1bf0d65186433c040e8044d0a4efeb0b",
"assets/assets/images/snooker_banner.png": "3a2efd28a7ea2095f7e41389b70c64c4",
"assets/assets/images/startup.png": "d04d3bd39fc128821c172bec1a632970",
"assets/assets/images/TableTennis.png": "87779a6d178176499a797c9c2616c1cd",
"assets/assets/images/team_1.png": "5d90c41a446a8029f34960e636c74998",
"assets/assets/images/team_2.png": "0f68bb2990e2abf12b91b774e0f6fe7b",
"assets/assets/images/team_3.png": "8b61af51f9a50b4bfdbee954e3730e54",
"assets/assets/images/team_4.png": "f83860f1b3dd1925486aa821cebca527",
"assets/assets/images/team_5.png": "9a464a5e586f4ec11f133835d2ebbd56",
"assets/assets/images/team_6.png": "4800331739a3ec4ff7a677d75cb2b245",
"assets/assets/images/team_7.png": "b6f710e5631331fbea32ed127c629a26",
"assets/assets/images/team_8.png": "bb6ce5408f6b16d0a56c1b067d5bdb3b",
"assets/assets/images/tennis_banner.png": "5ae76ec0bd17e9c66c358b3aa4cbd1ad",
"assets/assets/images/workshop.png": "43fe218bb07a3f5082131bc19b657e16",
"assets/assets/images/workshop_banner.png": "9bc80c247322fcd3441b6ad16ed45fea",
"assets/assets/logo/attach_file.png": "5e7cae33fc9285f5e9feef9a23bce675",
"assets/assets/logo/IT_mentoring.png": "470fd1958681a0dc81ac269879dbb539",
"assets/assets/logo/linkedin_logo.png": "34c35e86f673be5ed57119847d761101",
"assets/assets/logo/logo.png": "33013cbfb05e3c0a84f102e391516707",
"assets/assets/logo/logo_1.png": "6460f87ec8f2f442916d9cc3452b4583",
"assets/assets/logo/logo_2.png": "c8b337086257caf85e5e1688e341c6ba",
"assets/assets/logo/logo_3.png": "49a13653ce0c27daa23ed2f114c71105",
"assets/assets/logo/logo_4.png": "8b4c005cf62b74146a4f7bc630608bb1",
"assets/assets/logo/logo_5.png": "457f44f73338ce433bf2fd7f1aa3c109",
"assets/assets/logo/twitter_logo.png": "b09da972794f75854b5e048fd3955626",
"assets/assets/videos/about.m4v": "f2d0bf887bce258bb820f3d268ab79b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a8f4a7ebe44389207120437ab1631eb5",
"assets/NOTICES": "25bfbc991c106571d31f781729bf4803",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02ae25e890651eaf7326c86898b125da",
"/": "02ae25e890651eaf7326c86898b125da",
"main.dart.js": "fa4978776edf1a0b6ba473c9cde7f714",
"manifest.json": "9436f38a7591d9e81fbb354ed1e3498d",
"version.json": "c71159b1004d1538639f6ee07d4458bf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
