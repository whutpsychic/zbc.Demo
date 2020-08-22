//登录
const login = value => {
	return {
		type: "ISLOGIN",
		value
	};
};

//伸缩左侧菜单
const shrinkLeftMenu = value => {
	return {
		type: "SHRINKLEFTMENU",
		value
	};
};

//语言
const setLanguage = value => {
	return {
		type: "SETLANGUAGE",
		value
	};
};

//设置警报数据
const setAlertData = value => {
	return {
		type: "SETALERTDATA",
		value
	};
};

//设置信息数据
const setMsgData = value => {
	return {
		type: "SETMSGDATA",
		value
	};
};

export { login, shrinkLeftMenu, setLanguage, setAlertData, setMsgData };
