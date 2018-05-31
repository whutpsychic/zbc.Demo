
import React, { Component } from 'react';
import echarts from 'echarts';
import './echart.css';

class Chart extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			chart: null
		}
	}

	render() {

		const { style, withoutContainer} = this.props;
		let _style = style || {};

		let _cls = "";
		if (!withoutContainer)
			_cls = "chart-container";

		return (
			<div className={_cls} style={_style} ref="chart"></div>
		)
	}

	componentDidUpdate() {
		var chart = this.state.chart ? this.state.chart : echarts.init(this.refs.chart);

		const { option } = this.props;

		if (option)
			chart.setOption(option);
	}

	componentDidMount() {

		var chart = echarts.init(this.refs.chart);

		this.setState({
			chart: chart
		})

	}

}

export default Chart;