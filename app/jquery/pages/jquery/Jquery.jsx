import React, { Component } from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import $ from 'jquery';

export default class Jquery extends Component {

    componentDidMount() {
		$('.btn-test').click(function(){
			alert('-V-');
		})
	}

	render() {
		return (
			<div>
				<input className="btn-test" type="button" value="click me" />
			</div>
		)
	}
}