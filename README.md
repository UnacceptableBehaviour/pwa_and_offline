# pwa_and_offline
Tutorial to create a PWA web app and understand Service Workers and caching patterns and SSL certificates.  
AIM: add offline capability to web site
  
#### To start local copy
```
% cd /lang/html_css_js/pwa_and_offline
% npm start
or
% node server.js
ADDED CERTS for https server on port 50089... https://dtk.health:50089/
Local DevServer Started on port 50099... http://dtk.health:50099/
```
  
### PWA web app tutorial (not sure how long it will take :/ . . .)
https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp


## Structure of the App
```
.env                                    # environment variables
.glitch-assets                          # glitch project file
CONTRIBUTING.md                         # notes
LICENSE                                 # OTT on the tin
README.md                               # notes
README_orig.md                          # notes
Your-First-PWA-Codelab.code-workspace   # VS code project file
package.json                            # NPM info file, app name version and packages metadate
                                          # defines entry point -   "scripts": { "start": "node server.js" }
                                          # and packages installed with
                                          # npm install
                                          # to proj_root/node_modules/
public/images/add.svg                   # assets
public/images/clear-day.svg              \
public/images/clear-night.svg             |
public/images/cloudy.svg                  |
public/images/favicon.ico                 |
public/images/fog.svg                     |
public/images/hail.svg                    |
public/images/icons/icon-128x128.png      |
public/images/icons/icon-144x144.png      |
public/images/icons/icon-152x152.png      |
public/images/icons/icon-192x192.png      | assets
public/images/icons/icon-256x256.png      |
public/images/icons/icon-32x32.png        |
public/images/icons/icon-512x512.png      |
public/images/install.svg                 |
public/images/partly-cloudy-day.svg       |
public/images/partly-cloudy-night.svg     |
public/images/rain.svg                    |
public/images/refresh.svg                 |
public/images/sleet.svg                   |
public/images/snow.svg                    |
public/images/thunderstorm.svg            |
public/images/tornado.svg                /
public/images/wind.svg                  # assets
public/index.html                       # included app.js - NB index.js - main entry point for directory
public/offline.html
public/scripts/app.js                   # ** entry point
public/scripts/install.js
public/scripts/luxon-1.11.4.js
public/service-worker.js
public/styles/inline.css
server.js                               # ** app started with 'node server.js'
                                        # npm start - defaults to server.js
                                        # its also define in the package.json { 'start': 'script.js' }
                                        # npm start runs this - - - - - - - - - - - - - - - ^
                                        # various setup inc portNo
watch.json
```

## REFERENCES
### Chrome Devtools Manual  
https://developers.google.com/web/tools/chrome-devtools?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2  

### Service Worker (25m) watch @x2
https://www.youtube.com/watch?v=DtuJ55tmjps&t=41s  

### WorkBox - Homepage
https://developers.google.com/web/tools/workbox  

### WorkBox - A Developer Toolkit for Service Workers and Beyond - podcast
https://www.youtube.com/watch?v=1oVFwgK4tp0  

### Progressive Web App Training (36 vids - 5-10m each)
https://www.youtube.com/watch?v=psB_Pjwhbxo&list=PLNYkxOF6rcIB2xHBZ7opgc2Mv009X87Hh  

### DarkSky API - u: c@g p: pwaexperiment  
https://darksky.net/dev/register  
secret key: 9ade75dc9397ce3454d1762b7b1530b0  
https://api.darksky.net/forecast/9ade75dc9397ce3454d1762b7b1530b0/37.8267,-122.4233  
Forecast Request:  https://api.darksky.net/forecast/[key]/[latitude],[longitude]  
DarkSky Docs: https://darksky.net/dev/docs  
API Usage: https://darksky.net/dev/account  
Libs langs:https://darksky.net/dev/docs/libraries  
Hfd: 52.0564° N, 2.7160° W  
Report for Hereford: https://api.darksky.net/forecast/9ade75dc9397ce3454d1762b7b1530b0/52.0564,2.7160  
Return a big ol’ JSON object with weather report  

### GitHub Help
https://help.github.com/articles/about-pull-requests  

### package.json NPM info file, app name version and packages metadate
https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/  

### npm install
https://www.stackchief.com/tutorials/npm%20install%20%7C%20how%20it%20works  

### Node.js best practices (GOLD! Scaling, multiprocess, asynch logging, alsorts!)
https://www.codementor.io/mattgoldspink/nodejs-best-practices-du1086jja  

### Manifests
https://developers.google.com/web/fundamentals/web-app-manifest  

### Dev SSL certificate - Express(node) - Not working
https://flaviocopes.com/express-https-self-signed-certificate/  

### Intro to Service Workers
https://developers.google.com/web/fundamentals/primers/service-workers  

### Promises - basics
https://developers.google.com/web/fundamentals/primers/promises#promise-terminology  
