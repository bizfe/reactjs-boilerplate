//react-ie8 hack https://www.npmjs.com/package/react-ie8
import es5Shim from 'es5-shim';
import es5Sham from 'es5-shim/es5-sham';
import consolePolyFill from 'console-polyfill';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import Page from './pages/page/Page.jsx';
import BBoxRouter from './routers/router';

const store = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Page/>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('reactApp'));