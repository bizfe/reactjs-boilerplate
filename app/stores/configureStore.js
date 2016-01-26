import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/'

const createStoreWithMidderware = applyMiddleware(
	createLogger(),
	thunkMiddleware
	)(createStore)

export default function configureStore (initialState) {
	const store = createStoreWithMidderware(rootReducer, initialState);
	return store;
}
