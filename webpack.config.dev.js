var Path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: './src/index.js',

  output: {
    filename:   'app-dev.js',
    path:       Path.resolve(__dirname, 'dist')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot','babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'stylus?sourceMap'
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"development"' } }),
  ],

  resolve: {
    root:       ['./src'],
    extensions: ['','.js','.jsx'],
    alias: {
      'react': Path.join(__dirname,'node_modules','react')
    }
  }
}
