import React, { Component } from 'react';
import { getActivityByTag } from '../../actions/activities';
import { connect } from 'react-redux';
import Content from '../../components/content/Content.jsx';
import styles from './activities.less';

class Activities extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getActivityByTag('all'));
	}
	render() {
		let { activities, tags } = this.props;
		return (
			<div>
				<div className={styles.actlist}>
					<Content activities={activities}/>
				</div>
			</div>    
		);
  	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	}
}

function mapStateToProps(state) {
	let { activities, tags }  = state;
	return {
		activities,
		tags
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);