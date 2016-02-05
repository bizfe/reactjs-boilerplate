var express = require('express');
var webpack = require('webpack');
var config = require('./webpacks/webpack.config.dev');

var app = express();
var compiler = webpack(config);

/**
 * 负责在内存中快速的动态编译静态文件(img, css, fonts ...)到js
 * Reference: http://webpack.github.io/docs/webpack-dev-middleware.html
 */
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


/**
 * 负责组件的热替换(Hot module replacement), 采用Websock形式，所以必须把webpack-hot-middleware/client(客户端)一起打包发送到浏览器，实时接收更新.
 * 注: 这个是webpack的功能，针对的所有的js模块，不单是针对reactjs的。
 * Reference: https://github.com/glenjamin/webpack-hot-middleware
 */
app.use(require('webpack-hot-middleware')(compiler));


// 负责接收静态bundle请求
app.listen(3000, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('bundle server listening at http://localhost:3000');
});
