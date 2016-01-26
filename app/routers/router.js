import React, { Component } from 'react';
import { Router, Route, } from 'react-router';
import { createHashHistory } from 'history';
import Activities from '../pages/activities/Activities.jsx';


// 去除'_k=xxxx'query
let browserHistory = createHashHistory({
  queryKey: false
});


class BBoxRouter extends Component {
	render(){
		return (
				<Router history={browserHistory}>
					<Route path="/" component={ Activities }>
					</Route>
					<Route path="/activities" component={ Activities }>
					</Route>
					<Route path="*" component={ Activities }>
					</Route>
				</Router>
			)
	}
}
export default  BBoxRouter;
