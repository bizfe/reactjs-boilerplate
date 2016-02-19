import {
    UPDATE_ACTIVITY_BY_TAG,
    UPDATE_ACTIVITY_BY_TITLE, 
    UPDATE_ACTIVITY_BY_PAGER, 
    REQUEST_ACTIVITY_START, 
    REQUEST_ACTIVITY_FAIL, 
    REQUEST_ACTIVITY_SUCCESS
} from '../constants/actionType.js';

const initialState = {
    isRequesting: false,
    message: ''
}


export function updateAcitivity(preState = initialState, action) {
    let data = action.data || {};
    switch (action.type) {
        case REQUEST_ACTIVITY_START:
            return Object.assign({}, preState, {
                isRequesting: true
            });
            break;
        case REQUEST_ACTIVITY_FAIL:
        case UPDATE_ACTIVITY_BY_TAG:
        case UPDATE_ACTIVITY_BY_TITLE:
            return Object.assign({}, preState, {
                isRequesting: false,
                message: data.message
            });
            break;
        default:
            return preState;
    }
}
