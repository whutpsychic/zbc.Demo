// ****************************************
// 此脚本的目的在于根据menu.txt自动生成menu.js
// ****************************************
// 目前支持到三级菜单
const fs = require("fs");

// 写入文件的位置
const position = "./src/develop/menu.js";

// 缓存文件位置
const tempPosition = "./menu.js";

// 层级菜单的分隔符
const signal = [`==`, `$`, `@`];

// =======================工具函数===============================

// ['xxxx eeee','xxxx2 eeee2','xxxx3 eeee3', [...]] =>
// {title: "xxxx", icon: "eeee", address: "eeee",children:[
// 	{title: "xxxx2", icon: "eeee2", address: "eeee2"},
// 	{title: "xxxx3", icon: "eeee3", address: "eeee3"},
// ]}
const arrToObj = arr => {
	const _arr = arr[0].split(" ");
	let obj = { title: _arr[0], icon: _arr[1], address: _arr[1] };
	if (arr[1]) {
		obj.children = [];
		for (let i = 1; i < arr.length; i++) {
			if (typeof arr[i] === "string") {
				let item = arr[i].split(" ");
				obj.children.push({ title: item[0], icon: item[1], address: item[1] });
			} else if (arr[i] instanceof Array) {
				obj.children.push(arrToObj(arr[i]));
			}
		}
	}
	return obj;
};

// 检查每一项是不是有关键分隔符
// 如果是字符串型且没有关键分隔符，则表示已分解到最底层
// 如果还有关键分隔符，说明还可以继续往下分
const splitIt = (strItem, i) => {
	if (typeof strItem !== "string")
		throw new Error("splitIt 函数传入的不是一个字符串");
	let resArr = strItem.split(signal[i]);
	return arrToObj(resArr);
};

// =======================工具函数===============================

fs.readFile("./src/menu.txt", (err, data) => {
	if (err) throw err;
	// 获取整个文件的内容字符串
	let dataStr = data.toString("utf-8");
	// 整理数据并输出
	// 三级菜单符号转换
	dataStr = dataStr.replace(/\s\s\s\s\s\s/g, signal[2]);
	// 二级菜单符号转换
	dataStr = dataStr.replace(/\s\s\s\s/g, signal[1]);
	// 一级菜单符号转换
	dataStr = dataStr.replace(/\s\s/g, signal[0]);
	// console.log(dataStr);
	let arr = dataStr.split(signal[0]);
	// 二维数组
	arr = arr
		// 二级菜单
		.map(item => {
			return item.split(signal[1]);
		})
		// 三级菜单
		.map(itemArr => {
			return itemArr.map(item => {
				if (item.split(signal[2]).length > 1) {
					return item.split(signal[2]);
				} else {
					return item;
				}
			});
		})
		// 主要处理
		.map(item => {
			return arrToObj(item);
		});

	// console.log(arr);
	// 此时arr已经是标准数据格式
	// 需要将之写入到目标文件夹之中
	const menuDataString = `const menuData = ${JSON.stringify(
		arr
	)}\nexport default menuData;`;
	fs.writeFile(position, menuDataString, err => {
		if (err) throw err;
		console.log("menu.js文件写入成功");
	});

	const tempMenuDataString = `${JSON.stringify(arr)}`;
	fs.writeFile(tempPosition, tempMenuDataString, err => {
		if (err) throw err;
	});
});
