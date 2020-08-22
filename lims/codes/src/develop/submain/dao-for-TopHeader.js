const dao = {};

//警报数据
dao.getAlertData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([{ text: "警报1" }, { text: "警报2" }, { text: "警报3" }]);
		}, 1500);
	});
};

//信息数据
dao.getMsgData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([{ text: "信息1" }, { text: "信息2" }, { text: "信息3" }]);
		}, 1500);
	});
};

export default dao;
