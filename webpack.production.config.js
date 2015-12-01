var path = require('path');
var Webpack = require('webpack');
var config = {
  entry: path.resolve(__dirname, 'js/app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,

      // There is not need to run the loader through
      // vendors
      exclude: ['node_modules'],
      loader: 'babel'
    }]
  }
};

module.exports = config;
