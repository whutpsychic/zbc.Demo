
import React, { Component } from 'react';

import { Frame } from '../../../../components';
import { Chart } from '../../../../components';
import { TopBar, Select, DateRange, Button } from '../../../../components';

import DATA from './data.js';

class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			select1Data: DATA.select1,
			select2Data: DATA.select2,
			select3Data: DATA.select3
		}
	}

	render() {

		const frame_style = { height: "auto" };
		const container_style = { height: "800px" };

		const { select1Data, select2Data, select3Data } = this.state;

		return (
			<div className="with-left-menu" style={container_style}>
				<Frame title="质量统计分析" style={frame_style}>
					<TopBar>
						<Select label="选择车间" data={select1Data}/>
						<Select label="选择产品" data={select2Data}/>
						<Select label="班组" data={select3Data} />
						<DateRange label="时间选择"/>
						<Button text="查询"/>
					</TopBar>
					<Chart option={DATA.echartOption()} style={{ height: "600px"}}/>
				</Frame>
			</div>
		)
	}

	componentDidMount() {
	}


}

export { Page };