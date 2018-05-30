
import React, { Component } from 'react';

import { Frame } from '../../../../components';
import { TopBar, Button, FactorySelector } from '../../../../components';
import { Chart } from '../../../../components';

import DATA from './data.js';

class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = {

			chart1style: { height: "350px" },
			chart2style: { height: "400px" },
			chart3style: { height: "380px" },

			chart1Data: DATA.getchart1Option(),
			chart2Data: DATA.getchart2Option(),
			chart3Data: DATA.getchart3Option()
		}
	}

	render() {

		const frame1_style = { marginTop: "20px", float: "left", width: "500px", minWidth: "unset", height: "480px"};
		const frame2_style = { marginTop: "20px", marginLeft: "530px", minWidth: "unset", height: "480px"};
		const frame3_style = { };

		const { chart1Data, chart2Data, chart3Data } = this.state;

		return (
			<div className="with-left-menu">
				<TopBar>
					<FactorySelector label="选择分厂" />
					<Button text="查询" onClick={this.query.bind(this)} />
				</TopBar>
				<Frame title="日计划完成情况" style={frame1_style}>
					<Chart option={chart1Data} style={this.state.chart1style} />
				</Frame>
				<Frame title="月计划完成情况" style={frame2_style}>
					<Chart option={chart2Data} style={this.state.chart2style} />
				</Frame>
				<Frame title="指标月度趋势" style={frame3_style}>
					<Chart option={chart3Data} style={this.state.chart3style} />
				</Frame>
			</div>
		)
	}

	query() {
		this.setState({
			chart1Data: DATA.getchart1Option(),
			chart2Data: DATA.getchart2Option(),
			chart3Data: DATA.getchart3Option()
		})
	}

	componentDidMount() {
	}


}

export { Page };