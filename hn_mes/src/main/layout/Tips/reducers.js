
import { actionTypes } from './actions';

//changeMenuReducer
const showTipsReducer = (state = false, action) => {

	switch (action.type){

		case actionTypes.showTips: return action.show;
		default: return state;
	}

}


export { showTipsReducer};