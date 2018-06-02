
import React, { Component } from 'react';
import echarts from 'echarts';

//返回时间数据
const returnOptionTimer = () => {

	let _date = new Date();

	let _hour, _minute, _second = NaN;

	let __hour__ = _date.getHours();

	_hour = __hour__ > 12 ? __hour__ - 12 : __hour__;
	_minute = _date.getMinutes();
	_second = _date.getSeconds();

	let _h = (_hour * 5 + (_minute / 12)).toFixed(2);

	return {
		h: _h > 60 ? _h - 60 : _h,
		m: _minute,
		s: _second
	}

}

//返回option
const getOption = () => {

	let obj = returnOptionTimer();

	let _op = {

		tooltip: {
			show: false
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
				radius: '85%',
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
					show: false,
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
					length: 10, // 属性length控制线长
					lineStyle: { // 属性lineStyle控制线条样式
						color: '#0ff'
					}
				},
				splitLine: { // 分隔线
					length: 18, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						width: 2,
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
				radius: '85%',
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
					show: false,
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
					length: 10, // 属性length控制线长
					lineStyle: { // 属性lineStyle控制线条样式
						color: '#0ff'
					}
				},
				splitLine: { // 分隔线
					length: 18, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						width: 2,
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
				radius: '85%',
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
						fontWeight: 'normal',
						color: '#29fafe',
						fontSize: 12,
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
							width: 3,
							length: '50%'
						}
					},
					//分
					{
						value: 40,
						pointer: {
							width: 2,
							length: '60%'
						}
					},
					//秒
					{
						value: 28,
						pointer: {
							width: 1,
							length: '80%'
						}
					}
				],
				animation: false
			}
		]
	};

	//数据装填
	_op.series[2].data[0].value = obj.h;
	_op.series[2].data[1].value = obj.m;
	_op.series[2].data[2].value = obj.s;

	return _op;
}


/********************************************/

class ClockChart extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			chart: null,
			chartOption: undefined,
			closeKey: null
		}
	}

	render() {

		let _style = {
			width: "100%",
			height: "100%"
		};

		return (
			<div style={_style} ref="chart"></div>
		)
	}

	componentDidUpdate() {

		var chart = echarts.init(this.refs.chart);

		if (this.state.chartOption) {
			chart.setOption(this.state.chartOption);
		}
	}

	componentDidMount() {

		var _key = setInterval(() => {

			let _option = getOption();

			this.setState({
				chartOption: _option
			});
		}, 1000);

		this.setState({
			closeKey: _key
		})
	}

	componentWillUnmount() {
		window.clearInterval(this.state.closeKey);
	}

}

export default ClockChart;