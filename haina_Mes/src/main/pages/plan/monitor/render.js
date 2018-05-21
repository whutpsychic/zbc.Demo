
import React, { Component } from 'react';

import { Frame } from '../../../../components';
import { TopBar, Select, Date, Button } from '../../../../components';
import { Chart } from '../../../../components';

import tool from '../../../../tool';
import DATA from './data.js';

class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			select1Data: DATA.select1,

			chart1style: { height: "350px" },
			chart2style: { height: "400px" },
			chart3style: { height: "380px" }
		}
	}

	render() {

		const frame1_style = { float: "left", width: "500px", minWidth: "unset", height: "480px"};
		const frame2_style = { marginLeft: "520px", minWidth: "unset", height: "480px"};
		const frame3_style = { };

		const { select1Data, select2Data, select3Data, select4Data, select5Data } = this.state;

		return (
			<div className="with-left-menu">
					<TopBar>
						<Select label="选择工厂" data={select1Data} />
						<Button text="查询" />
					</TopBar>
					<Frame title="日计划完成情况" style={frame1_style}>
						<Chart option={DATA.getchart1Option()} style={this.state.chart1style} />
					</Frame>
					<Frame title="月计划完成情况" style={frame2_style}>
						<Chart option={DATA.getchart2Option()} style={this.state.chart2style} />
					</Frame>
					<Frame title="指标月度趋势" style={frame3_style}>
						<Chart option={DATA.getchart3Option()} style={this.state.chart3style} />
					</Frame>
			</div>
		)
	}

	componentDidMount() {
	}


}

export { Page };