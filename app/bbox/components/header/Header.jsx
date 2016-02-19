import React, { Component, PropTypes } from 'react';
import styles from './header.less';

class Header extends Component {
	render() {
		return (
			<div className={styles.header}>
				I am Header
			</div>
			)
	}
}
export default Header;