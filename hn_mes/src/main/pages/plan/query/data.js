import tool from '../../../../tool';
const DATA = {

	select1: [
		{ text: "年计划" },
		{ text: "日计划" },
		{ text: "月计划" }
	],
	select2: [
		{ text: "生产计划" },
		{ text: "小号计划" },
		{ text: "能源计划" }
	],

	select4: [
		{ text: "全选" },
		{ text: "烧碱车间" },
		{ text: "ECM车间" },
		{ text: "氢氧化镁车间" }
	],
	select5: [
		{ text: "全选" },
		{ text: "液氯" },
		{ text: "循环水" },
		{ text: "氨气" }
	],

	grid: [
		{ string1: "小电石1", string2: "电石乙炔", string3: "吨", string4: "99.25", string5: "2977.65", string6: "70.12", string7: "1258.31", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3"},
		{ string1: "小电石2", string2: "电石乙炔", string3: "吨", string4: "99.25", string5: "2977.65", string6: "70.12", string7: "1258.31", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3"},
		{ string1: "小电石3", string2: "电石乙炔", string3: "吨", string4: "99.25", string5: "2977.65", string6: "70.12", string7: "1258.31", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3"},
		{ string1: "小电石4", string2: "电石乙炔", string3: "吨", string4: "99.25", string5: "2977.65", string6: "70.12", string7: "1258.31", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3"},
		{ string1: "小电石5", string2: "电石乙炔", string3: "吨", string4: "99.25", string5: "2977.65", string6: "70.12", string7: "1258.31", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3"},
		{ string1: "小电石6", string2: "电石乙炔", string3: "吨", string4: "99.25", string5: "2977.65", string6: "70.12", string7: "1258.31", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3"},
		{ string1: "小电石7", string2: "电石乙炔", string3: "吨", string4: "99.25", string5: "2977.65", string6: "70.12", string7: "1258.31", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3"},
		{ string1: "小电石8", string2: "电石乙炔", string3: "吨", string4: "99.25", string5: "2977.65", string6: "70.12", string7: "1258.31", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3"}
	],

	getchart1Option: function () {
		return tool.putOn.bar1({
			title: '',
			legend: {
				data: ['日产量', '月累计', '年累计']
			},
			tooltip: {},
			xAxis: [{
				type: 'category',
				data: ['小电石', '大电石', '液碱（32%液碱折百）', '50%液碱', '片碱', 'SPVC', 'EPVC', 'CPVC', 'Mg（oH）2', 'MGO'],
				axisLabel: {
					interval: 0
					//rotate:35
				}
			}],
			yAxis: [{
				type: 'value',
				//min: 0,
				//max: 3500,
				//splitNumber:8
			}],
			grid: {
				top: '20%',
				bottom: '15%'
			},
			series: [{
				type: 'bar',
				name: '日产量',
				data: tool.getRandomArr(10, 0, 100)
			}, {
				type: 'bar',
				name: '月累计',
				data: tool.getRandomArr(10, 500, 3000)
			}, {
				type: 'bar',
				name: '年累计',
				data: tool.getRandomArr(10, 0, 30000)
			}]
		})
	},

	getchart2Option: function () {
		return tool.putOn.bar1({
			title: '',
			legend: {
				data: ['完成年计划(%)']
			},
			tooltip: {},
			xAxis: [{
				type: 'category',
				data: ['小电石', '大电石', '液碱（32%液碱折百）', '50%液碱', '片碱', 'SPVC', 'EPVC', 'CPVC', 'Mg（oH）2', 'MGO'],
				axisLabel: {
					interval: 0
				}
			}],
			yAxis: [{
				type: 'value',
	
			}],
			grid: {
				top: '20%',
				bottom: '15%'
			},
			series: [{
		
				type: 'bar',
				name: '完成年计划(%)',
				data: ['98.25', '55.14', '64.14', '71.98', '73.36', '99.08', '7.44', '47.28', '26.21', '69.30'],
				markLine: {
					label: {
						normal: {
							formatter: '{b}'
						}
					},
					data: [
						{
							name: '满值标线',
							yAxis: 100
						}
					]
				}
			}]
		})
	},

	getchart3Option: function () {
		return tool.putOn.bar1({
			title: '',
			legend: {
				data: ['日产量', '月累计', '年累计', '库存']
			},
			tooltip: {},
			xAxis: [{
				type: 'category',
				data: ['小电石', '大电石', '液碱（32%液碱折百）', '50%液碱', '片碱', 'SPVC', 'EPVC', 'CPVC', 'Mg（oH）2', 'MGO'],
				axisLabel: {
					interval: 0
					//rotate:35
				}
			}],
			yAxis: [{
				type: 'value',
				//min: 0,
				//max: 3500,
				//splitNumber:8
			}],
			grid: {
				top: '20%',
				bottom: '15%'
			},
			series: [{
				type: 'bar',
				name: '日产量',
				data: ['45.98', '3.43', '34.38', '47.22', '8.70', '16.80', '8.35', '11.64', '42.37', '11.50']

			}, {
				type: 'bar',
				name: '月累计',
				data: ['919.65', '68.64', '687.66', '944.38', '174.04', '336.06', '167.04', '232.72', '847.31', '229.98']
			}, {
				type: 'bar',
				name: '年累计',
				data: ['10116.19', '755.08', '7564.27', '10388.22', '1914.47', '3696.70', '1837.43', '2559.96', '9320.41', '2529.76']
			}, {
				type: 'bar',
				name: '库存',
				data: ['1258.31', '1000.00', '1067.12', '3240.00', '43.20', '94.47', '24.85', '798.05', '77.65', '208.06']
			}]
		})
	}

};


export default DATA;