
import React, { Component } from 'react';
import echarts from 'echarts';
import './echart.css';

class Chart extends Component {


	render() {

		const { style } = this.props;
		let _style = style || {};

		return (
			<div className="chart-container" style={_style} ref="chart">
	
			</div>
		)
	}

	componentDidMount() {

		const { option } = this.props;

		var chart = echarts.init(this.refs.chart);

		if (option)
			chart.setOption(option);

	}

}

export default Chart;