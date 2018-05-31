
var option = () => {




	return {

		backgroundColor: '#0d1426',

		tooltip: {
			show: false,
		},

		series: [
			{
				name: 'clock_1',
				type: 'gauge',
				min: 0,
				max: 6,
				startAngle: 90,
				endAngle: -90,
				zlevel: 1,
				splitNumber: 6,
				radius: '50%',
				axisLine: { // 坐标轴线
					show: false,
					lineStyle: { // 属性lineStyle控制线条样式
						color: [
							[0, 'transparent'],
							[1, 'transparent']
						],
						width: 3
					}
				},
				axisLabel: { // 坐标轴小标记
					textStyle: { // 属性lineStyle控制线条样式
						fontWeight: 'bolder',
						color: '#0ff',
						fontSize: 18,
						fontFamily: 'ElementalEnd'
					},
					formatter: function (v) {
						if (v === 0) return 12;
						return v;
					}
				},
				axisTick: { // 坐标轴小标记
					length: 15, // 属性length控制线长
					lineStyle: { // 属性lineStyle控制线条样式
						color: '#0ff'
					}
				},
				splitLine: { // 分隔线
					length: 25, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						width: 3,
						color: '#0ff'
					}
				},
				detail: {
					show: false
				}
			},
			{
				name: 'clock_2',
				type: 'gauge',
				min: 6,
				max: 12,
				startAngle: -90,
				endAngle: -270,
				zlevel: 2,
				splitNumber: 6,
				radius: '50%',
				axisLine: { // 坐标轴线
					show: false,
					lineStyle: { // 属性lineStyle控制线条样式
						color: [
							[0, 'transparent'],
							[1, 'transparent']
						],
						width: 3
					}
				},
				axisLabel: { // 坐标轴小标记
					textStyle: { // 属性lineStyle控制线条样式
						fontWeight: 'bolder',
						color: '#0ff',
						fontSize: 18,
						fontFamily: 'ElementalEnd',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				axisTick: { // 坐标轴小标记
					length: 15, // 属性length控制线长
					lineStyle: { // 属性lineStyle控制线条样式
						color: '#0ff'
					}
				},
				splitLine: { // 分隔线
					length: 25, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						width: 3,
						color: '#0ff'
					}
				},
				detail: {
					show: false
				}
			},
			{
				name: 'pointers',
				type: 'gauge',
				radius: '50%',
				min: 0,
				max: 60,
				startAngle: 90,
				endAngle: -269.9,
				axisLine: { // 坐标轴线
					show: false,
					lineStyle: { // 属性lineStyle控制线条样式
						color: [
							[0, 'transparent'],
							[1, 'transparent']
						],
						width: 3
					}
				},
				axisLabel: { // 坐标轴小标记
					show: false
				},
				axisTick: { // 坐标轴小标记
					show: false
				},
				splitLine: { // 分隔线
					show: false
				},
				detail: {
					show: false
				},
				title: {
					show: true,
					backgroundColor: 'transparent',
					textShadowColor: '#29fafe', //默认透明
					textShadowBlur: 3,
					offsetCenter: [0, '-50%'], // x, y，单位px
					padding: [7, 20, 5, 20],
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						color: '#29fafe',
						fontSize: 20,
					},
				},
				pointer: {
					width: 4,
					length: '40%'
				},
				itemStyle: {
					color: '#0ff'
				},
				data: [
				//时
					{
						value: 15,
						name: 'zWatch\nΩ',
						pointer: {
							width: 6,
							length: '50%'
						}
					},
				//分
					{
						value: 40,
						pointer: {
							width: 4,
							length: '60%'
						}
					},
					//秒
					{
						value: 28,
						pointer: {
							width: 3,
							length: '80%'
						}
					}
				],
				animation: false
			}
		]

	}

}



export default option;
