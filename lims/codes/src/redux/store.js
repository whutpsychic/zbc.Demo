import { createStore, combineReducers } from "redux";
import {
	isLoginReducer,
	shrinkLeftMenuReducer,
	setLanguageReducer,
	setAlertDataReducer,
	setMsgDataReducer
} from "./reducers";

const store = createStore(
	combineReducers({
		//当前是否已经是登录状态
		isLogin: isLoginReducer,

		//是否收齐起了左侧菜单
		shrinkLeftMenu: shrinkLeftMenuReducer,

		language: setLanguageReducer,

		//设置警报数据
		alertData: setAlertDataReducer,

		//设置信息数据
		msgData: setMsgDataReducer
	})
);

export default store;
