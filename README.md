# boilerplate cordova react app

## Installation:

How to use this code as new app:

*This is ES6 & ES7 babilon version. If you prefere you can typescript version then follow instructions from this 
[link](https://github.com/uhlryk/my-cordova-react-boilerplate/tree/typescript)*

1 Clone this repository to new empty dir:

    https://github.com/uhlryk/my-cordova-react-boilerplate.git

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

## Commands:

First time there is need to build cordova init app. It could be run only one, before any other commands:

    gulp init-cordova
    
Compile/transpile/transform all source files and copy them to cordova app

    gulp prepare-build

Build cordova app. Should be run only if cordova app is initialized

    gulp build-ios
    
    gulp build-android

Build and emulate cordova app. Should be run only if cordova app is initialized

    gulp emulate-ios
    
    gulp emulate-android
    
## Use case:

If you just install this boilerplate, and made some chanages in src/ and want to run ios emulation:

    gulp init-cordova && gulp prepare-build && gulp emulate-ios
    
If you initialized cordova previouslu and you want to crate android app:

    gulp prepare-build && gulp emulate-android

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
