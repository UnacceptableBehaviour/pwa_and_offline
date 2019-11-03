/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */
'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v3';
const DATA_CACHE_NAME = 'data-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  '/',
  '/images/sroll.png',
  '/index.html',
  '/scripts/app.js',
  '/scripts/install.js',
  '/scripts/luxon-1.11.4.js',
  '/styles/inline.css',
  '/images/add.svg',
  '/images/clear-day.svg',
  '/images/clear-night.svg',
  '/images/cloudy.svg',
  '/images/fog.svg',
  '/images/hail.svg',
  '/images/install.svg',
  '/images/partly-cloudy-day.svg',
  '/images/partly-cloudy-night.svg',
  '/images/rain.svg',
  '/images/refresh.svg',
  '/images/sleet.svg',
  '/images/snow.svg',
  '/images/thunderstorm.svg',
  '/images/tornado.svg',
  '/images/wind.svg',  
];

// self refers to this file? <- CHECK

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.
    evt.waitUntil(  // method takes a promise and uses it to know how long installation takes, and whether it succeeded or not.
            
        // promise                       /- - - 'static-cache-v1' cache from open
        caches.open(CACHE_NAME).then((cache) => {
          
          console.log('[ServiceWorker] Pre-caching offline page', cache);
          //                          / - - list of files to be preloaded to cache
          return cache.addAll(FILES_TO_CACHE);
        
        })
    );  

  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.

  evt.waitUntil(    //       / - - - cache entries keys (cache names not name of things in cache)
      caches.keys().then((keyList) => {
        console.log(`[SeWk] key list: ${keyList}`);
              // [SeWk] key list: static-cache-v1
              // change name and reload static-cache-v1 to static-cache-v2
              // [SeWk] key list: static-cache-v1,static-cache-v2
        
        //                         / - - for each key - run anonumous () (1 entry: static-cache-v1)
        return Promise.all( keyList.map( (key) => {
          //if (key !== CACHE_NAME) {  // < NO diff for each key? key refers to the WHOLE cache
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) // dont delete data cache
            
            console.log('[ServiceWorker **] Removing old cache', key);
            // key == static-cache-v1: [ServiceWorker **] Removing old cache static-cache-v1
            
            return caches.delete(key);
          
          } else {
            console.log(`[SeWk] else key: ${key}`);
            // key == static-cache-v2: [SeWk] else key: static-cache-v2
          }
          
          
        }));
      
      })
  );  
  
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker - - ] Fetch', evt.request.url);
  console.log('[SeWk] evt.request', evt.request);
  // CODELAB: Add fetch event handler here.
  
  //if (evt.request.mode !== 'navigate') {
  //  // Not a page navigation, bail.
  //  return;
  //}
  
  // store data returned from requests to the API in the DATA_CACHE
  // check if accessinf API - - - \  
  if (evt.request.url.includes('/forecast/')) {
    
    console.log('[Service Worker] Fetch (data)', evt.request.url);
    evt.respondWith(
        caches.open(DATA_CACHE_NAME).then((cache) => {
          return fetch(evt.request)
              .then((response) => {
                // If the response was good, clone it and store it in the cache.
                if (response.status === 200) {
                  cache.put(evt.request.url, response.clone());
                }
                return response;
              }).catch((err) => {
                // Network request failed, try to get it from the cache.
                return cache.match(evt.request);
              });
        }));

    return;
  
  }
  evt.respondWith(  // retrieving shell from cache first then network
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(evt.request)
            .then((response) => {
              return response || fetch(evt.request);
            });
      })
  );
  
  
  //evt.respondWith( // Key Point: Wrapping the fetch call in evt.respondWith()
  //                 // prevents the browsers default fetch handling and tells the browser
  //                 // we want to handle the response ourselves. If you don't call
  //                 // evt.respondWith() inside of a fetch handler, you'll just get the
  //                 // default network behavior.
  //                
  //    fetch(evt.request) // try and get item from network
  //        .catch(() => { // catch network error
  //                        // needed to set a BP to see these!
  //                        console.log("[fetch ERROR]", evt.request.url);
  //                        // http://http://localhost:50099/turkey.html   < URL entered - available in this scope
  //                        
  //                        return caches.open(CACHE_NAME)
  //                            .then((cache) => {
  //                              // presumably match request.url - cache shell
  //                              console.log("[fetch ERROR]", evt.request.url);
  //                              // http://http://localhost:50099/turkey.html   < URL entered - available in this scope
  //                              return cache.match('offline.html');
  //                            });
  //                      })
  //);

});
