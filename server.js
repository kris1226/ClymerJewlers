'use strict';

var webpack = require('webpack')
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebPackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
});

server.listen(8081, 'localhost', function(err) {
  if(err) {
    console.log(err);
  }
  console.log('Listening at localhost:8081')
});
