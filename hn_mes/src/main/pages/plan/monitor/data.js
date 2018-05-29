import tool from '../../../../tool';
const DATA = {



	getchart1Option: function () {
		return tool.putOn.bar1({
			title: '',
			legend: {
				data: ["日实际完成", "日计划"]
			},
			tooltip: {},
			xAxis: [{
				type: 'category',
				data: ["石灰", "干碳材", "电石（大）", "电石（小）", "乙炔气", "烧碱（100%）", "氯化氢气体"],
				axisLabel: {
					interval: 0,
					rotate: 35
				}
			}],
			yAxis: [{
				type: 'value',
				min: 0,
				max: 3500,
				splitNumber: 8
			}],
			grid: {
				top: '15%',
				bottom: '20%'
			},
			series: [{
				type: 'bar',
				name: '日实际完成',
				data: tool.getRandomArr(7,500,3500)
			}, {
				type: 'bar',
				name: '日计划',
				data: tool.getRandomArr(7, 500, 3500)
			}]
		})
	},

	getchart2Option: function () {
		return tool.putOn.bar1({
			title: '',
			color: ['#F09B55', '#5BAC99', '#7273C8'],
			legend: {
				data: ['计划完成', '月累计完成', '月计划']
			},
			tooltip: {},
			xAxis: [{
				type: 'category',
				data: ["石灰", "干碳材", "电石（大）", "电石（小）", "乙炔气", "烧碱（100%）", "氯化氢气体"],
				axisLabel: {
					interval: 0,
					rotate: 25
				}
			}],
			yAxis: {
				type: 'value',
				min: 0,
				max: 90000,
			},
			grid: {
				top: '15%',
				bottom: '20%'
			},
			series: [{
				type: 'bar',
				name: '计划完成',
				data: tool.getRandomArr(7,1000, 50000)
			}, {
				type: 'bar',
				name: '月累计完成',
				data: tool.getRandomArr(7, 50000, 90000)
			}, {
				type: 'bar',
				name: '月计划',
				data: tool.getRandomArr(7, 60000, 90000)
			}]
		})
	},

	getchart3Option: function () {
		return tool.putOn.line1({
			title: '',
			legend: {
				data: ["烧碱合格率", "SPVC合格率", "CPVC合格率", "EPVC合格率"]
			},
			tooltip: {},
			xAxis: [{
				type: 'category',
				data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
				axisLabel: {
					interval: 0,
					textStyle: {
						color: '#000'
					}
				},
				axisLine: {
					lineStyle: { color: '#000' }
				}
			}],
			yAxis: [{
				type: 'value',
				min: 0,
				max: 150,
				axisLabel: {
					textStyle: {
						color: '#000'
					}
				},
				axisLine: {
					lineStyle: { color: '#000' }
				},
			}],
			grid: {
				top: '15%',
				bottom: '10%'
			},
			series: [{
				type: 'line',
				name: '烧碱合格率',
				data: tool.getRandomArr(7, 20, 150)
			}, {
				type: 'line',
				name: 'SPVC合格率',
				data: tool.getRandomArr(7, 20, 150)
			}, {
				type: 'line',
				name: 'CPVC合格率',
				data: tool.getRandomArr(7, 20, 150)
			}, {
				type: 'line',
				name: 'EPVC合格率',
				data: tool.getRandomArr(7, 20, 150)
			}]
		})
	}

};


export default DATA;