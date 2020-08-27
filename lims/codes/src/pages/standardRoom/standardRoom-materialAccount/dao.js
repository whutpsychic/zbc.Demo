const dao = {};

dao.getTable = () => {
	//总条数
	const total = 17;

	//列数
	const columnL = 21;

	let resultArr = [];
	for (let i = 0; i < total; i++) {
		let obj = {};
		for (let j = 0; j < columnL; j++) {
			obj[`string${j}`] = "*数据*";
		}
		obj.key = `k${i}`;
		resultArr.push(obj);
	}

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(resultArr);
		}, 1500);
	});
};

export default dao;
