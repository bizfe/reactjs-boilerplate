import {
    UPDATE_ACTIVITY_BY_TAG,
    UPDATE_ACTIVITY_BY_TITLE,
    UPDATE_ACTIVITY_BY_PAGER,

    REQUEST_ACTIVITY_START,
    REQUEST_ACTIVITY_FAIL,
    REQUEST_ACTIVITY_SUCCESS,
    GET_TAGS,
    UPDATE_TAG_STATE
}
from '../constants/actionType';

// 使用fetch主要考虑到同构。
import fetch from 'isomorphic-fetch';

/**
 * [_requestActivity 内部action: 通知reducer请求activity开始]
 * @param  {[type]} type  [description]
 * @param  {[type]} tag   [description]
 * @param  {[type]} title [description]
 * @return {[type]}       [description]
 */
function _requestActivity(type, data) {
    return {
        type, data
    }
}


/**
 * [getActivityByTag 通过tag获取活动列表]
 * @param  {[type]} tag [description]
 * @return {[type]}     [description]
 */
export function getActivityByTag(tag) {
    let url = `/aj/activity/getActivities?tagName=${tag}`;
    let actionType = UPDATE_ACTIVITY_BY_TAG;
    return (dispatch) => {
        return fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {

                    // 请求失败
                    dispatch(_requestActivity(REQUEST_ACTIVITY_FAIL, ''));
                    return;
                }
            })
            .then((data) => {
                if (data.code == 0) {
                    dispatch(_requestActivity(actionType, data));
                } else {
                    dispatch(_requestActivity(REQUEST_ACTIVITY_FAIL, ''));
                }
            })
            .catch((res) => {
                dispatch(_requestActivity(REQUEST_ACTIVITY_FAIL, ''));
            })
    }
}
