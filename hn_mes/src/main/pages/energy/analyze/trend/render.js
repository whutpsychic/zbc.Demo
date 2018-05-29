
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

			chart1style: { height: "650px" },

			timeMode: "time",
			timeLabel: "选择日期"
		}
	}

	render() {

		const frame_style = { height: "auto" };

		const { select1Data, select2Data, select3Data, select4Data } = this.state;
		const { timeLabel, timeMode } = this.state;

		return (
			<div className="with-left-menu">
				<Frame title="趋势图分析" style={frame_style}>
					<TopBar>
						<Select label="选择范围" data={select1Data}/>
						<Select label="选择车间" data={select2Data}/>
						<Select label="选择能源介质" data={select3Data} />
						<Select label="选择时间维度" data={select4Data} onChange={this.changeTimer.bind(this)}/>
						<Date label={timeLabel} mode={timeMode} />

						<Button text="查询"/>
					</TopBar>
					<Chart option={DATA.getChartOption()} style={this.state.chart1style}/>
				</Frame>

			</div>
		)
	}

	componentDidMount() {
	}

	changeTimer(e) {

		let v = e.target.value;

		if (v === "1") this.setState({
			timeMode: "time",
			timeLabel: "选择日期"
		})

		else if (v === "2") this.setState({
			timeMode: "month",
			timeLabel: "选择月份"
		})

		else if (v === "3") this.setState({
			timeMode: "year",
			timeLabel: "选择年份"
		})

	}

}

export { Page };