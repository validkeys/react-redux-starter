var Path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    fileName:   'bundle.js',
    publicPath: 'http://localhost:3001/assets'
  },

  proxy: {
    '/api/*': {
      target: "http://localhost:3000",
      secure: false
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot','babel-loader'],
        exclude: /node_modules/,
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

  stylus: {
    use:    [require('nib')()],
    import: ['~nib/lib/nib/index.styl']
  },

  resolve: {
    root:       ['./src'],
    extensions: ['','.js','.jsx'],
    alias: {
      'react': Path.join(__dirname,'node_modules','react')
    }
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"development"' } }),
  ]
}
