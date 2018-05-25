
import { createStore, combineReducers } from 'redux';

import { changeMenuReducer } from './main/layout/Header';
import { showTipsReducer } from './main/layout/Tips';

const reducers = combineReducers({
	currMenu: changeMenuReducer,
	showTips: showTipsReducer
});

export default createStore(reducers);
