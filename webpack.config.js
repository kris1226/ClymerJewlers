'use strict';
var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = __dirname;

module.exports = {
    devtool: 'eval-source-map',
    entry: {
      main: [
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        './src/main.js'
      ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(ROOT_PATH, 'build'),
        publicPath: '/build/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              include: path.join(ROOT_PATH, 'src'),
              loader: 'react-hot!babel'
            },
            {
              test: /\.scss$/,
              include: path.join(ROOT_PATH, 'src'),
              loader: "style!css!sass"
            }
        ]
    }
};
