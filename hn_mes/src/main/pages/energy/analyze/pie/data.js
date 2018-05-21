import tool from '../../../../../tool';
const DATA = {

	select1: [
		{ text: "全厂" },
		{ text: "化工厂" },
		{ text: "电石乙炔厂" },
		{ text: "动力西厂" }
	],
	select2: [
		{ text: "全车间" },
		{ text: "SPVC车间" },
		{ text: "EPVC车间" }
	],
	select3: [
		{ text: "循环水" },
		{ text: "工业水" },
		{ text: "脱盐水" }
	],
	select4: [
		{ text: "天级" },
		{ text: "月级" },
		{ text: "日级" }
	],

	getChartOption:() => {
		return tool.putOn.pie1({
			legend: {
				left: 20,
				orient: 'vertical',
				data: ['西区总量', '东区总量', '西区食堂', '东区食堂', '办公楼', '专家楼']
			},
			toolbox: {
				show: true,
				feature: {
					dataView: { readOnly: false },
					restore: {},
					saveAsImage: {}
				}
			},
			series: [
				{
					type: 'pie',
					name: '循环水',
					data: [
						{ name: '西区总量', value: tool.getRandom(20, 100) },
						{ name: '东区总量', value: tool.getRandom(20, 100) },
						{ name: '西区食堂', value: tool.getRandom(20, 100) },
						{ name: '东区食堂', value: tool.getRandom(20, 100) },
						{ name: '办公楼', value: tool.getRandom(20, 100) },
						{ name: '专家楼', value: tool.getRandom(20, 100) },
						//{ name: '集控楼', value: tool.getRandom(0, 100) },
						//{ name: '化工厂', value: tool.getRandom(0, 100) },
						//{ name: '动力西区', value: tool.getRandom(0, 100) },
						//{ name: '电石乙炔厂', value: tool.getRandom(0, 100) },
					]
				}
			]
		})
	}
};


export default DATA;