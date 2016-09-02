# boilerplate cordova react app

## Installation:

How to use this code as new app:

*This is ES6 & ES7 babel version. If you prefere you can typescript version then follow instructions from this 
[link](https://github.com/uhlryk/my-cordova-react-boilerplate/tree/typescript)*

1 Clone this repository to new empty dir:

    git clone https://github.com/uhlryk/my-cordova-react-boilerplate.git emptyDirectory

2 Create your app repository

3A Change remote git url to your repository url

    git remote set-url origin https://github.com/yournick/your-app-url.git
    
3B If you don't want to have this boilerplate commit history you can remove it and create new own git init:

    rm -rf .git
    git init
    git remote add origin https://github.com/yournick/your-app-url.git
    git add .
    git commit

4 change app info in package.json 

5 update npm modules

    npm install

## React Hot loader:

WebpackDevServer is using network ip, therefore you can use it from any device in current network.

## Commands:

First time there is need to build cordova init app. It could be run only one, before any other commands:

    gulp init-cordova
    
Compile/transpile/transform all source files and copy them to cordova app

    gulp prepare-build

Build cordova app. Should be run only if cordova app is initialized

    gulp build-ios
    
    gulp build-android
    
    gulp build-browser

Build and emulate cordova app. Should be run only if cordova app is initialized

    gulp emulate-ios
    
    gulp emulate-android
    
## Use case:

If you just install this boilerplate, and made some chanages in src/ and want to run ios emulation:

    gulp init-cordova && gulp prepare-build && gulp emulate-ios
    
If you initialized cordova previously and you want to crate android app:

    gulp prepare-build && gulp emulate-android

## Hot loader emulation

It allows to make changes in react app and make it instantly available in ios/android emulator (cordova need to be initialized)
 
    gulp prebuild-ios-hot
    
    gulp prebuild-android-hot

    gulp prebuild-browser-hot

## Ripple emulation with hot loader

*A browser based html5 mobile application development and testing tool*

Cordova need to be initialized. To run this emulator:
  
    gulp prebuild-ripple-hot

## The PhoneGap Developer App with hot loader
*Develop locally then see the changes instantly on your mobile device.*

To run test app you have to install:

for android:

    https://play.google.com/store/apps/details?id=com.adobe.phonegap.app
 
for ios:

    https://itunes.apple.com/app/id843536693
    
And run on phone this app, then run :

    gulp prebuild-phonegap-hot
    
And write in phone app phonegap server listening url (it should be at the beginning of logs something like this `[phonegap] listening on 192.168.1.100:3001`)
    
## Structure:

  * src                - directory with all sources
  * release            - directory with creaded electron app (created automatically)
  * package.json       - standard npm package. But name and version will be copied to electron npm. THere is also field `electronVersion`
  * src/index.jsx      - root react file
  * src/index.html     - app layuot
  * src/components     - place here all components
  * src/reducers       - place here all redux reducers
  * src/sass           - sass style files

## Technology:

  * cordova/phonegap
  * react
  * react-router
  * jsx
  * redux
  * hot-loader
  * webpack
  * ES6 & ES7
  * gulp
  * bootstrap 3
  * sass
  * compass

## Licence:

MIT
