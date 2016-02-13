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
    // replaces all instances of process.env.NODE_ENV with the string "production".
    // When used in conjunction with the uglify plugin, all the code in React that 
    // is inside a dev only conditional like if ("production" !== process.env.NODE_ENV) { ... } will be stripped.
    // new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    // new CompressionPlugin({
    //     asset: "{file}",
    //     algorithm: "gzip",
    //     regExp: /\.js$|\.html$/,
    //     threshold: 10240,
    //     minRatio: 0.8
    // })
  ],

  resolve: {
    root:       ['./src',Path.resolve('..','core')],
    extensions: ['','.js','.jsx'],
    alias: {
      'react': Path.join(__dirname,'node_modules','react')
    }
  }
}