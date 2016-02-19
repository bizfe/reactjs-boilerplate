import { combineReducers } from 'redux';
import { updateAcitivity } from './activities';

const rootReducer = combineReducers({
	activities: updateAcitivity
})

export default rootReducer;