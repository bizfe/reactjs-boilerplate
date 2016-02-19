var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  output: {
    path: path.join(__dirname, '../static/js/app/'),
    filename: '[name].bundle.js',
    publicPath: 'http://0.0.0.0:3000/static/js/',
    sourceMapFilename: '[file].map?' + new Date().getTime()
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot','babel'],
      include: path.join(__dirname, '../app'),
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!less',
      include: path.join(__dirname, '../app'),
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css?modules!postcss',
      include: [path.join(__dirname, '../static/css/'), path.join(__dirname, '../app')],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  }
};