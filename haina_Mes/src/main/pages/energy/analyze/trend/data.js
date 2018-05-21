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
		return tool.putOn.line1({
			legend: {
				data: ['2015', '2016']
			},
			toolbox: {
				show: true,
				feature: {
					dataView: { readOnly: false },
					restore: {},
					saveAsImage: {}
				}
			},
			tooltip: {
				formatter: function (x) {
					//console.log(x);
					var _temp = "循环水<br/>";
					for (var i = 0; i < x.length; i++) {
						_temp += x[i].seriesName + '/' + x[i].name + " : " + x[i].value + "<br/>";
					}
					return _temp;
				}
			},
			xAxis: [{
				type: 'category',
				data: ['6/01', '6/02', '6/03', '6/04', '6/05', '6/06', '6/07', '6/08', '6/09', '6/10', '6/11', '6/12', '6/13', '6/14', '6/15', '6/16', '6/17', '6/18', '6/19', '6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/26', '6/27', '6/28', '6/29', '6/30']
			}],
			yAxis: [{
				//splitLine: { show: 1 },
				type: 'value',
				max: 20,
				min: 5

			}],
			series: [
				{
					type: 'line',
					name: '2015',
					data: tool.getRandomArr(30, 10, 15)
				},
				{
					type: 'line',
					name: '2016',
					data: tool.getRandomArr(30, 10, 15)
				}
			]
		})
	}
};


export default DATA;