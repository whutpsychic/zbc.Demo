
import tool from '../../../../tool';

const DATA = {

	select1: [
		{ text: "SPVC" },
		{ text: "EPVC" },
		{ text: "CPVC" },
		{ text: "VCM" },
		{ text: "烧碱车间" }
	],
	select2: [
		{ text: "电石" },
		{ text: "乙炔气" },
		{ text: "液氯" },
		{ text: "循环水" },
		{ text: "氨气" }
	],
	select3: [
		{ text: "白班" },
		{ text: "夜班" }
	],

	echartOption: function () {
		return tool.putOn.bar1({
			title: {
				text: 'CPVC质量分布柱状图'
			},
			legend: {
				data: ['合格', '不合格', '废料'],
				selected: {
					'合格': false
				}
			},
			xAxis: [{
				type: 'category',
				data: tool.getDate({
					endDay: 20,
					startDay: 1,
					faller: '日',
					month: '3月'
				})
			}],
			yAxis: [{
				type: 'value',
				max: 300,
				min: 0
			}],
			series: [{
				type: 'bar',
				name: '合格',
				data: tool.getRandomArr(20, 0, 200)
			}, {
				type: 'bar',
				name: '不合格',
				data: tool.getRandomArr(20, 0, 200)
			}, {
				type: 'bar',
				name: '废料',
				data: tool.getRandomArr(20, 0, 200)
			}]
		})
	}
};


export default DATA;