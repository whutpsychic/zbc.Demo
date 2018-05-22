
import React, { Component } from 'react';

import { Frame } from '../../../../../components';
import { TopBar, Select, Date, Button } from '../../../../../components';
import { Chart } from '../../../../../components';

import DATA from './data.js';

class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			select1Data: DATA.select1,
			select2Data: DATA.select2,
			select3Data: DATA.select3,
			select4Data: DATA.select4,

			chart1style: { height: "500px" }
		}
	}

	render() {

		const frame_style = { height: "755px" };

		const { select1Data, select2Data, select3Data, select4Data } = this.state;

		return (
			<div className="with-left-menu">
				<Frame title="饼图分析" style={frame_style}>
					<TopBar>
						<Select label="选择范围" data={select1Data}/>
						<Select label="选择车间" data={select2Data}/>
						<Select label="选择能源介质" data={select3Data} />
						<Select label="选择时间维度" data={select4Data} />
						<Date label="选择月份" />

						<Button text="查询"/>
					</TopBar>
					<Chart option={DATA.getChartOption()} style={this.state.chart1style}/>
				</Frame>

			</div>
		)
	}

	componentDidMount() {
	}


}

export { Page };