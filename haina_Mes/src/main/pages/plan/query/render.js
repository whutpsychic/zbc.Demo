
import React, { Component } from 'react';

import { Frame } from '../../../../components';
import { Grid } from '../../../../components';
import { TopBar, Select, Input, Date, Button } from '../../../../components';
import { Chart } from '../../../../components';

import tool from '../../../../tool';
import DATA from './data.js';
import gridOption from './gridOption.js';

class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			select1Data: DATA.select1,
			select2Data: DATA.select2,
			select3Data: DATA.select3,
			select4Data: DATA.select4,
			select5Data: DATA.select5,

			chart1style: {height:"350px"},
			chart2style: {height:"400px"},
			chart3style: {height:"380px"}
		}
	}

	render() {

		const frame_style = { height: "auto" };

		const { select1Data, select2Data, select3Data, select4Data, select5Data } = this.state;

		return (
			<div className="with-left-menu">
				<Frame title="生产计划查询" style={frame_style}>
					<TopBar>
						<Select label="计划类别" data={select1Data}/>
						<Select label="计划类型" data={select2Data}/>
						<Select label="分厂" data={select3Data}/>
						<Select label="车间" data={select4Data}/>
						<Select label="产品" data={select5Data}/>
						<Date label="起始时间"/>
						<Date label="终止时间" />
						<Button text="查询"/>
					</TopBar>
					<Grid option={gridOption} data={DATA.grid}/>
				</Frame>
				<Frame title="产量统计">
					<Chart option={DATA.getchart1Option()} style={this.state.chart1style} />
				</Frame>
				<Frame title="完成年计划(%)">
					<Chart option={DATA.getchart2Option()} style={this.state.chart2style} />
				</Frame>
				<Frame title="出入库统计">
					<Chart option={DATA.getchart3Option()} style={this.state.chart3style} />
				</Frame>

			</div>
		)
	}

	componentDidMount() {
	}


}

export { Page };