
import React, { Component } from 'react';

import { Frame } from '../../../../components';
import { Grid } from '../../../../components';
import { TopBar, Select, Button, DateRange } from '../../../../components';
import { Chart } from '../../../../components';
import { FactorySelector } from '../../../../components';


import DATA from './data.js';
import gridOption from './gridOption.js';

class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			select1Data: DATA.select1,
			select2Data: DATA.select2,
			select4Data: DATA.select4,
			select5Data: DATA.select5,

			chart1style: {height:"350px"},
			chart2style: {height:"400px"},
			chart3style: { height: "380px" },

			chart1Data: DATA.getchart1Option(),
			chart2Data: DATA.getchart2Option(),
			chart3Data: DATA.getchart3Option()
		}
	}

	render() {

		const frame_style = { height: "auto" };

		const { select1Data, select2Data, select4Data, select5Data } = this.state;

		const { chart1Data, chart2Data, chart3Data } = this.state;

		return (
			<div className="with-left-menu">
				<Frame title="生产计划查询" style={frame_style}>
					<TopBar>
						<Select label="计划类别" data={select1Data}/>
						<Select label="计划类型" data={select2Data}/>
						<FactorySelector label="选择分厂"/>
						<Select label="车间" data={select4Data}/>
						<Select label="产品" data={select5Data}/>
						<DateRange label="时间选择"/>
						<Button text="查询" onClick={this.query.bind(this)}/>
					</TopBar>
					<Grid option={gridOption} data={DATA.grid}/>
				</Frame>
				<Frame title="产量统计">
					<Chart option={chart1Data} style={this.state.chart1style} />
				</Frame>
				<Frame title="完成年计划(%)">
					<Chart option={chart2Data} style={this.state.chart2style} />
				</Frame>
				<Frame title="出入库统计">
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