
import { actionTypes } from './actions';
import config from '../../../config.js';

//changeMenuReducer
const changeMenuReducer = (state=config.currMenu, action) => {

	switch (action.type){

		case actionTypes.changeMenu: return action.menu;
		default: return state;
	}

}




export { changeMenuReducer};