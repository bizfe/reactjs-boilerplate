var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var themePath = path.resolve('/Users/kugua/shareTime/bbox/static/css/theme');

module.exports = {
  devtool: '#source-map',
  entry: {
    app: path.join(__dirname, '../app/App.jsx'),
    lib: ['react', 'react-dom', 'react-redux', 'react-router', 'redux', 'redux-thunk']
  },
  output: {
    path: path.join(__dirname, '../static/js/app/'),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map?' + new Date().getTime()
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin("lib", "lib.bundle.js"),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/,  loader: 'babel', include: path.join(__dirname, '../app'),  exclude: /node_modules/ },
      { test: /\.less$/,  loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss!less',  include: path.join(__dirname, '../app'),  exclude: /node_modules/},
      { test: /\.css$/,   loader: 'style!css?modules!postcss',  include: [path.join(__dirname, '../static/css/'), path.join(__dirname, '../app')],  exclude: /node_modules/},
      { test: /\.json$/,  loader: 'json-loader'}
    ]
  },
  postcss: [
    require('postcss-modules-emoji-classname').default
  ],
  resolve: {
    alias: {
        themePath: themePath
    }
  }
};
