
import { createStore, combineReducers } from 'redux';

import { changeMenuReducer } from './main/layout/Header';

const reducers = combineReducers({
	currMenu: changeMenuReducer
});

export default createStore(reducers);
