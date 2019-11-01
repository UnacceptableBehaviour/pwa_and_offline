# pwa_and_offline
Tutorial to create a PWA web app and understand Service Workers and caching patterns
AIM: add offline capability to web site

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
