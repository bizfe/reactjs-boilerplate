import React, { Component, PropTypes } from 'react';
import style from './content.less';

class Content extends Component {
	render() {
		let data = this.props.info;    	
		let activities = this.props.activities;    	
		return(
			<div key='activityWrapper' className={style.wrapper} >
				haha.  Im content...(修改我不刷新即可更新哦~) {activities.message}
			</div>
			)
	}
}

Content.propTypes = {
  detailLink: PropTypes.string,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  ctime: PropTypes.string,
  like: PropTypes.number,
  comment: PropTypes.number
}

export default Content;