//是否已登录
const isLoginReducer = (state = false, action) => {
	switch (action.type) {
		case "ISLOGIN":
			return action.value;
		default:
			return state;
	}
};

//是否收起左侧菜单
const shrinkLeftMenuReducer = (state = false, action) => {
	switch (action.type) {
		case "SHRINKLEFTMENU":
			return action.value;
		default:
			return state;
	}
};

//语言
const setLanguageReducer = (state = "CN", action) => {
	switch (action.type) {
		case "SETLANGUAGE":
			return action.value;
		default:
			return state;
	}
};

//设置警报数据
const setAlertDataReducer = (state = [], action) => {
	switch (action.type) {
		case "SETALERTDATA":
			return action.value;
		default:
			return state;
	}
};

//设置信息数据
const setMsgDataReducer = (state = [], action) => {
	switch (action.type) {
		case "SETMSGDATA":
			return action.value;
		default:
			return state;
	}
};

export {
	isLoginReducer,
	shrinkLeftMenuReducer,
	setLanguageReducer,
	setAlertDataReducer,
	setMsgDataReducer
};
