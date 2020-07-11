'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "55931fc40b590b239e0c06bf188ee650",
".git/config": "a5f15e5da56fb46a5fbe6d4519fcb8c0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "36bc575bcb34c12ea4690df19cb689d3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "ed7e7fbf049b0abec799d76066da4e1d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9def10f06ec46e1e84d5ddf1f57bfc61",
".git/logs/refs/heads/master": "9def10f06ec46e1e84d5ddf1f57bfc61",
".git/logs/refs/remotes/origin/master": "25f1430b24a651da0bf1e1b75037661f",
".git/objects/02/e1cf62ced3540a852830303295ef928e408df2": "ca848fd99dbe3c35db8563c2595f4dc7",
".git/objects/06/aaa6cc3f3fda4e370c196f6486113e9ac278d1": "bb7c7f95a8c6537f1ca4a3969f5d6ddc",
".git/objects/0a/5286178e51c24435add726c20088649039eecd": "563421d89f81536ce51700aa1e4c534a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/19/740e5fc1a5893f513ce43e3ca3205a9f487cb1": "bf1de44c12d308fa8052c53b9ce3ba40",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/14da7e966543bc479217aa72271e212a6b7f2f": "3deb96e9e09a7d7ca72fb29317ec98fd",
".git/objects/24/6a2951e0db3163c45fa8d431730621d3059cc1": "97a62f6928599068e908950c5e3a7b9b",
".git/objects/2a/3e9e8b514a3a97f90b6e988da6d985011d8d53": "c0f84ce6733fc933df47be65336f7d29",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3d/434d54237d0178f4f1b0c9660858ae1cd30489": "dcb96ae57c12e0bd9baa206872ed5c95",
".git/objects/53/cb89e5f02daaa4590fdb771b852dc4bde85477": "493678d5850f7cc6b446d93e57f916cc",
".git/objects/5b/6193e1726c931461aaa8026ba0b0bdf2a0b383": "e14fcf6472a4394ba6d28fd1bd7fc476",
".git/objects/5f/119c2c2a879ca47f439b4322d45e6cfe8beca3": "06c866dffd6b6f0bd5579ca4785a8ad9",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/60/31c722061f03c9e3a98a19af1823904931f8cf": "2415b76582ccd867983ce5e2dc504667",
".git/objects/63/fa94df3c55db2da10898cbf6a15bdb1eb21e11": "50db21f9bb066a05c12dfd38134e16eb",
".git/objects/65/c5fd22dd05fe5bc041b62b7fdb8900f6cd5734": "2441cbf0e6e5b34703c2f5f7d28ca9e5",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6d/d1f3ae3e66aa6b9d7532d879aa8810ca6d76f7": "955aaa2fed2880b291e1dc1845b0c0d9",
".git/objects/6e/a372976d0d9ef7ea1eb8f148404ad2f7302103": "56e631989c19866cf37e6ecfc5baec13",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/70/763cc24eae54903d4d63bd815ace35223fce18": "f0e2c0c36327128fe3830fa582f428fb",
".git/objects/70/f16a81b32c8429128a1863d9baca5512c7e6c6": "cf4850281175972b3661ea3dfc55c961",
".git/objects/71/becc3e6ae51c42d154d7337918b230c70548d7": "2ee347b6dc9a32f2e48982024eb00b7d",
".git/objects/76/c77fa7cd05bd1170f23160f9bd3afe59a3c818": "59ac17adc3386d7fcbeb60cf8008a379",
".git/objects/7b/642e8eb95a3e4b3c8f73c58d82bb86403afd6d": "03c7c1974bea17ed01e8b383a58dd054",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/85/130cca390687f19b0e21e241ef576343c75f50": "9c7cd3d79fe2692b6df905b2acd0f08f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/105c273a3e16866fe7016aa6ba6ea1bad892d6": "404f63371c0499458ed9a8e40181a4bc",
".git/objects/8f/86a483ae4b1dc961904ab0726eca04d8546eb1": "64898327e047a81520ebb9fb3170ab16",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/8f602c3a5d7d1ebd329d11aed3175e76744060": "5cd783c5447a694a937900dbc417e084",
".git/objects/97/74a21bd51bc1dc9160714d8090b94318224bfd": "5dfdcb0a29480f2432a410ea669433f0",
".git/objects/9f/c811cf82421bace90105a5d907039a523f2847": "1b81d64e597a9dbfbbc7ca5668cc87bb",
".git/objects/a0/7e39ce628fc9774afbac4de038a596b98b3e32": "444173db06dcf7bc5cb9e56605e22814",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a3/e4dfcd717799f4868d0dc5df6d8a1922ed9b99": "bc6c07c3c290ddb83ad34cc0f286323f",
".git/objects/a5/b80bb4d6c2a2dfa9728c3ed350d14a73dc31ca": "ed0f995e8fd6d1f898c49d42670a1423",
".git/objects/a6/b24962e8cd6b0be78511c81b0798784f233c49": "2b7b70a892b6de4d791480d4d4397e85",
".git/objects/ab/0a301968a20d9243df9cf2e72115bb55e3fa2c": "bae118bab4b3bd572fb99f996ef5af68",
".git/objects/ad/8ee41fe7afcd383bcecc53fe83a6723771d3ef": "1ec2d44b67e1260c7139ebd73b095936",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/87ca269417948d20fd49586c4959ef2e867d90": "ad8b135950f377a78baafb490b556f76",
".git/objects/c2/d5e815debfae42c46242bf7817fc3d7f04bedf": "aaa523529ff18aab46d5469348a40ced",
".git/objects/c8/69356add0d92c1c6f26428795d24a6f33dd9e7": "83144782187d2fe310d4b45f0df75a45",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/ce/8dbd33df701361be22be3e56090ffab56a2acf": "4738af9310568057f39f8760f46dbc03",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d2/b39b05e9b85730e554d9b4468515f7911e2270": "580006c6a310813c731724dffe152719",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/eb/abe2ce3057d34e0093857c7216420ad070f68c": "34679873f19579e49a3eb4dcc80069ed",
".git/objects/ef/34cdb2385a717568819bf9030ee0b642fa84c6": "4a9038135d6db66494b9f6030dabb08c",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f9/e86ff5aa7789c9e97006d7e9b526b9ddedd364": "9430e13e8ee7ed8308bac9f48507ad27",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/ORIG_HEAD": "dc299255bba9fa3b95da19c3915b9563",
".git/refs/heads/master": "dc299255bba9fa3b95da19c3915b9563",
".git/refs/remotes/origin/master": "dc299255bba9fa3b95da19c3915b9563",
"assets/AssetManifest.json": "ea5364043f64ef9a02b7459db288732c",
"assets/assets/fonts/Comfortaa-Bold.ttf": "801965b0436842e843141a5a6c1e387f",
"assets/assets/fonts/Comfortaa-Light.ttf": "929fd78b1498549427891f76ea0f1e51",
"assets/assets/fonts/Comfortaa-Medium.ttf": "1c593a568b347510402764c6b8e93a37",
"assets/assets/fonts/Comfortaa-Regular.ttf": "c2488bfda16e6a811f62414da90e51e4",
"assets/assets/fonts/Comfortaa-SemiBold.ttf": "d905de658a9c1fe4f9d779ccb15c7433",
"assets/assets/images/paper.png": "c646b0ec660e5f7aeddca75fd65a012c",
"assets/assets/images/rock.png": "6c18cd79805e2b87239c04c8ed02c045",
"assets/assets/images/scissor.png": "f49f8946e2c1cdbe73bf9522c96915ac",
"assets/FontManifest.json": "e89ed83bf6d5774c3e303f19f62cc15a",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "b03578ebc069c22186f5166c505a1da8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "75a94a7c8efb50c3f35b690e18183081",
"/": "75a94a7c8efb50c3f35b690e18183081",
"main.dart.js": "94d679d8d0c424785e36cfce1dd30a1b",
"manifest.json": "6c68c54497e48fb824bc9289968f84ea"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
