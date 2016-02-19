import React, { Component } from 'react';
import { Router, Route, } from 'react-router';
import { createHashHistory } from 'history';
import Jquery from '../pages/jquery/Jquery.jsx';

// 去除'_k=xxxx'query
let browserHistory = createHashHistory({
  queryKey: false
});


class BBoxRouter extends Component {
	render(){
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Jquery} />
				<Route path="/jquery" component={Jquery} />
				<Route path="*" component={Jquery} />
			</Router>
			)
	}
}
export default  BBoxRouter;
