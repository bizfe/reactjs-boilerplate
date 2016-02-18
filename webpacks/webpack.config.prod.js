var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, '../app/App.jsx'),
    app2: path.join(__dirname, '../app/App2.jsx'),
    lib: ['react', 'react-dom', 'react-redux', 'react-router', 'redux', 'redux-thunk']
  },
  output: {
    path: path.join(__dirname, '../static/'),
    filename: 'js/[name].bundle.js',
    sourceMapFilename: '[file].map?' + new Date().getTime()
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('lib', 'js/lib.bundle.js'),
    new ExtractTextPlugin('css/[name].styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/,  loader: 'babel', include: path.join(__dirname, '../app'),  exclude: /node_modules/ },
      { test: /\.less$/,  loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]','less', {publicPath: '../static/css/app/'}),  include: path.join(__dirname, '../app'),  exclude: /node_modules/},
      // { test: /\.less$/,  loader: 'style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!less',  include: path.join(__dirname, '../app'),  exclude: /node_modules/},
      { test: /\.css$/,   loader: 'style!css?modules',  include: [path.join(__dirname, '../static/css/'), path.join(__dirname, '../app')],  exclude: /node_modules/},
      { test: /\.json$/,  loader: 'json-loader'}
    ]
  }
  // resolve: {
  //   alias: {
  //       themePath: themePath
  //   }
  // }
};
