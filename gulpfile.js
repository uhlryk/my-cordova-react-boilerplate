var gulp = require('gulp');
var gutil = require("gulp-util");
var shell = require('gulp-shell')
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var runSequence = require('run-sequence');
var path = require("path");
var preprocess = require('gulp-preprocess');
var packageJson = require('./package.json');

const WEBPACK_SERVER_HOST = 'http://localhost';
const WEBPACK_SERVER_PORT = 3000;
const STATIC_PATH = 'static';
const BUNDLE_FILE = 'bundle.js';
const APP_NAME = packageJson.name;
const APP_VERSION = packageJson.version;

var webpackOptionsLoader = {
  test: /.jsx?$/,
  loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
  include: path.join(__dirname, 'src'),
  exclude: /node_modules/
};
var webpackOptions = {
  module: {
    loaders: [
      webpackOptionsLoader,
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, './dist/' + STATIC_PATH + '/'),
    filename: BUNDLE_FILE
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/bootstrap-sass/assets/stylesheets/'),
      path.resolve(__dirname, './node_modules/compass-mixins/lib/')
    ]
  },
  eslint: {

  },
  debug: true,
  progress: false,
  emitError: true,
  emitWarning: true,
  failOnError: true,
  stats: {
    colors: true,
    reasons: true
  },
  devtool: 'source-map'
};

gulp.task('compile-react', function(done) {
  webpack(webpackOptions, function(err, stats) {
    if(err) console.log(err);
    gutil.log("[webpack]", stats.toString({}));
    done();
  });
});
