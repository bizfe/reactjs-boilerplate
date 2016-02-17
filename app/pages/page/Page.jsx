import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import BBoxRouter from '../../routers/router';
import styles from './page.less';


class Page extends Component {

	render() {

		return (
			<div className={styles.pagestruct}>
				<Header />
					<BBoxRouter/>
				<Footer />
			</div>
		)
	}
}

export default Page;