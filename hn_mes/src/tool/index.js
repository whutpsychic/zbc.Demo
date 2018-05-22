
var tool = {};

/***********************/

var _handlersHelper = {

	extend: function () {

		//反复往里面遍历
		function zMultiplex(obj1, obj2) {

			//创建一个将要返回的对象
			var _obj = obj1;

			for (var k in obj2) {

				//如果obj1没有[k]覆盖
				if (!_obj[k]) {
					_obj[k] = obj2[k];
					continue;
				}

				//如果obj1是字符串,obj2直接覆盖obj1
				if (typeof _obj[k] == 'string' || typeof _obj[k] == 'number') {
					_obj[k] = obj2[k];
				}

				//如果obj1是对象obj2是字符串,obj1覆盖obj2
				else if (typeof obj1[k] == 'object' && typeof obj2[k] !== 'object') {
					continue;
				}

				//都是对象,深度覆盖
				else {

					_obj[k] = zMultiplex(_obj[k], obj2[k]);
				}
			}
			return _obj;
		}

		//第一个对象
		var _temp = arguments[0];

		//每后一个对象对第一个进行填补
		if (!!arguments[arguments.length - 1]) {

			for (var i = 1; i < arguments.length; i++) {

				//查看下一个对象中的每一个键
				for (var j in arguments[i]) {

					//如果_temp[j]是obj且arguments[i][j]是string,
					if (typeof _temp[j] == 'object' && typeof arguments[i][j] == 'string') {
						;
					}

					//如果都是obj
					else if (typeof _temp[j] == 'object' && typeof arguments[i][j] == 'object') {
						_temp[j] = zMultiplex(_temp[j], arguments[i][j]);
					}

					//如果_temp[j]是string,且arguments[i][j]是object,
					//如果都是string
					//如果_temp里面没有_temp[j]
					else {
						_temp[j] = arguments[i][j];
					}
				}
			}
		}

		//不是深度覆盖
		else {
			for (var i = 1; i < arguments.length - 1; i++) {
				for (var j in arguments[i]) {
					_temp[j] = arguments[i][j];
				}
			}
		}

		return _temp;
	}
}
/**************************************************/

//生成一个随机字符串函数
tool.createRandomStr = () => {
	return '随机字符串';
}

//针对数字，最小位为2位格式化
tool.minTwoNumber = (num) => {
	if (typeof num !== 'number') throw new Error("tool.minTwoNumber 函数传入的参数不是一个数字！");

	if (num < 10) return "0" + num;
	return num;
}

//生成当前时间字符串函数
tool.getCurrTime = () => {

	let date = new Date();
	let _str = '';
	_str += date.getFullYear() + '-';
	_str += tool.minTwoNumber(date.getMonth() + 1 > 12 ? 1 : date.getMonth() + 1) + '-';
	_str += tool.minTwoNumber(date.getDate()) + ' ';

	_str += tool.minTwoNumber(date.getHours()) + ':';
	_str += tool.minTwoNumber(date.getMinutes());

	return _str;
}

//拼接2哥数组函数
//第一个参数是要拼接时根据的同名字段
//之后参数是数组
tool.spliceArr = (name, arr1, arr2) => {

	let _arr = [];

	for (let i = 0; i < arr1.length; i++) {

		for (let j = 0; j < arr2.length; j++) {
			if (arr2[j].name === arr1[i].name) {
				_arr.push(Object.assign({}, arr1[i], arr2[j]));
				break;
			}
		}

	}

	return _arr;
}

//根据url找到当前的二级目录名称
tool.getcurrMenuByLevel = (x) => {

	if (!x) x = 1;

	if (typeof x !== "number") throw new Error("tool getcurrMenuByLevel 函数传入的x不是一个数字")

	return window.location.hash.split('/')[x];
}

//根据当前二级目录找出所有三级目录项
//menus应该是个数组
//level2是个字符串名字
tool.getMenuLevel3 = (menus, level2) => {
	let _arr = [];

	for (let i = 0; i < menus.length; i++) {
		if (menus[i].name === level2) {

			for (let j = 0; j < menus[i].children.length; j++) {
				_arr.push(Object.assign({}, menus[i].children[j]));
			}
		}
	}

	return _arr;
}

//根据当前url找出目前目录名称
//menu应该是个数组
tool.getmenuTitle = (menu) => {

	let _loc = tool.getcurrMenuByLevel(2);
	let _str = "";

	for (let i = 0; i < menu.length; i++) {
		if (menu[i].name === _loc) {
			_str = menu[i].text; break;
		}
	}

	return _str;
}


//返回一个日期数组
//month
//endDay
//startDay
//faller
tool.getDate = function (obj) {

	var __temp__ = [];
	var i = 0;

	for (; i < (obj.endDay - obj.startDay + 1); i++) {
		__temp__.push(obj.month + (obj.startDay + i).toString() + obj.faller);
	}

	return __temp__;

}

//返回一个随机数
//min
//max
tool.getRandom = (min, max) => {
	var __temp__ = (min + (max - min) * Math.random()).toFixed(2);
	return __temp__;
}

//返回一个随机数组
//0：多少个
//1：最小值
//2：最大值
//
tool.getRandomArr = (num, min, max) => {

	let _arr = [];

	for (let i = 0; i < num; i++) {

		let _randomnum = (min + (max - min) * Math.random()).toFixed(2);

		_arr.push(_randomnum);
	}

	return _arr;
}

//nums:产生个数
//timeA:前置数字
//timeB:后置数字
//linker:连接符
tool.getConstantTimes = function (obj) {

	var __temp__ = [];
	var i = 0;

	for (; i < obj.nums; i++) {
		__temp__.push(obj.timeA + obj.linker + (obj.timeB + i));

	}

	return __temp__;

}

tool.putOn = {

	//柱状图皮肤1(ok)
	bar1: function (x) {

		var _option = {
			color: ['#96cbcc', '#69aadb', '#e8c888', '#bcbcbc', '#80ba94', '#bb99cb', '#f38b89'],
			legend: { textStyle: { color: '#666', fontSize: 14 } },
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			xAxis: [{
				axisLabel: {
					textStyle: {
						color: '#666'
					}
				},
				axisLine: {
					lineStyle: { color: '#d7d7d7' }
				}
			}],
			yAxis: [{
				axisLabel: {
					textStyle: {
						color: '#666'
					}
				},
				axisLine: {
					lineStyle: { color: '#d7d7d7' }
				},
				splitLine: {
					show: 0
				}
			}]
		};

		var _temp = _handlersHelper.extend(_option, x);

		return _temp;
	},

	//柱状图皮肤2
	bar2 : function (x) {

		var _option = {
			color: ['#f09b55', '#5bac99', '#7273c8'],
			legend: { textStyle: { color: '#fff' } },
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			xAxis: {
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				axisLine: {
					lineStyle: { color: '#fff' }
				}
			},
			yAxis: {
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				splitLine: {
					show: 0
				}
			}
		};

		var _temp = _handlersHelper.extend(_option, x);

		return _temp;
	},

	//折线图皮肤1(ok)
	line1 : function (x) {

		var _option = {
			color: ['#69AADC', '#F38A89', '#80BA94', '#BD98CC'],
			legend: { textStyle: { color: '#666' } },
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			xAxis: [{
				axisLine: {
					lineStyle: {
						color: '#d7d7d7',
						width: 1
					}
				}, axisLabel: {
					textStyle: {
						color: '#666'
					}
				},
				splitLine: { show: false }
			}],
			yAxis: [{
				axisLine: {
					lineStyle: {
						color: '#d7d7d7',
						width: 1
					}
				}, axisLabel: {
					textStyle: {
						color: '#666'
					}
				},
				splitLine: { show: false }
			}, {
				axisLine: {
					lineStyle: {
						color: '#d7d7d7',
						width: 1
					}
				},
				splitLine: { show: false },
				axisLabel: { show: false },
				axisTick: { show: false }
			}],
			//对series的特殊处理
			series: (function () {
				var _temp = [];
				for (var i = 0; i < x.series.length; i++) {
					_temp.push({
						symbol: 'circle',
						symbolSize: 10,
						smooth: 0.5,
						lineStyle: {
							normal: {
								shadowBlur: 4,
								shadowColor: '#888',
								shadowOffsetX: 1,
								shadowOffsetY: 1
							}
						}
					})
				}
				return _temp;
			})()
		};

		var _temp = _handlersHelper.extend(_option, x);

		return _temp;
	},

	//(ok)
	pie1 : function (x) {
		var _option = {
			color: ['#63a5c8', '#e8c888', '#bb99cb','#9a110d','lightgreen','red'],
			legend: {
				textStyle: { color: '#666', fontSize: 14 }, orient: 'vertical',
				top: '8%', right: '5%'
			},
			tooltip: {},
			series: [{
				label: {
					normal: {
						textStyle: { fontSize: 14 }
					}
				},
				labelLine: { normal: { lineStyle: { color: '#000' } } }
			}]
		};

		var _temp = _handlersHelper.extend(_option, x, true);

		return _temp;
	},

	//表盘图皮肤1(ok)
	gauge1 : function (x) {

		var _option = {

			tooltip: {
				show: true,
				backgroundColor: '#F7F9FB',
				borderColor: '#92DAFF',
				borderWidth: '1px',
				textStyle: {
					color: 'black'
				}
			},
			series: [
				{
					center: ['50%', '70%'],
					startAngle: 180,
					endAngle: 0,
					radius: '120%',
					detail: {
						textStyle: {
							fontSize: 18,
							color: '#000'
						},
						offsetCenter: [0, '20%']
					},
					axisLine: {
						show: true,
						lineStyle: {
							width: 40,
							shadowBlur: 0,
							color: [
								[0.3, '#e08e8d'],
								[0.7, '#e8c888'],
								[1, '#80ba94']
							]
						}
					},
					axisLabel: { show: 0 }
				}
			]
		}

		_option = _handlersHelper.extend(_option, x);

		return _option;

	}

}










export default tool;