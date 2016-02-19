import fs from 'fs';
import webpack from 'webpack';
import devConfig from './webpack.config.dev.js';
import prodConfig from './webpack.config.prod.js';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

let proPath = __dirname + '/../',
	appPath = proPath + 'app/';

let isProduction = process.argv[2] == '--build' ? true : false;

if (isProduction) {
	process.env.NODE_ENV = 'production';
}

let doBundle = () => {
	getEntry((err, entries) => {

		if (isProduction) {
			prodConfig.entry = entries.prod;

			webpack(prodConfig).run(() => {
				console.log('compile over.');
			});
		} else {
			devConfig.entry = entries.dev;

			let app = express();
			let compiler = webpack(devConfig);

			/**
			 * 负责在内存中快速的动态编译静态文件(img, css, fonts ...)到js
			 * Reference: http://webpack.github.io/docs/webpack-dev-middleware.html
			 */
			app.use(webpackDevMiddleware(compiler, {
				noInfo: true,
				publicPath: devConfig.output.publicPath
			}));

			/**
			 * 负责组件的热替换(Hot module replacement), 采用Websock形式，所以必须把webpack-hot-middleware/client(客户端)一起打包发送到浏览器，实时接收更新.
			 * 注: 这个是webpack的功能，针对的所有的js模块，不单是针对reactjs的。
			 * Reference: https://github.com/glenjamin/webpack-hot-middleware
			 */
			app.use(webpackHotMiddleware(compiler));

			// 负责接收静态bundle请求
			app.listen(3000, '0.0.0.0', function(err) {
				if (err) {
					console.log(err);
					return;
				}

				console.log('bundle server listening at http://localhost:3000');
			});
		}
	});
}

/**
 * 拿到入口
 * @param  {Function} callback [description]
 */
let getEntry = (callback) => {
	let devEntries = {},
		prodEntries = {};

	fs.readdir(appPath, (err, files) => {

		if (err) {
			callback(err);
			return false;
		}

		files.forEach((file) => {

			//万一有隐藏文件夹呢
			if (/^\./.test(file)) {
				return false;
			}

			let filePath = appPath + file;
			let stat = fs.statSync(filePath);

			if (stat.isDirectory()) {

				//https://github.com/gaearon/react-hot-loader/issues/141
				devEntries[file] = [
					'webpack-hot-middleware/client?path=http://0.0.0.0:3000/__webpack_hmr',
					`./app/${file}/App.jsx`
				];

				prodEntries[file] = proPath + `app/${file}/App.jsx`;
			}
		});

		prodEntries.lib = ['react', 'react-dom', 'react-redux', 'react-router', 'redux', 'redux-thunk'];

		callback(null, {
			dev: devEntries,
			prod: prodEntries
		});
	});
}

doBundle();