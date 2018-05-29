
import React, { Component } from 'react';

import { Frame } from '../../../../components';
import { Grid } from '../../../../components';
import { TopBar, Select, Input, DateRange, Button } from '../../../../components';

import DATA from './data.js';
import gridOption from './gridOption.js';

class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			select1Data: DATA.select1,
			select2Data: DATA.select2,
		}
	}

	render() {

		const frame_style = { height: "auto" };
		const container_style = { height: "800px" };

		const { select1Data, select2Data } = this.state;

		return (
			<div className="with-left-menu" style={container_style}>
				<Frame title="质量统计查询" style={frame_style}>
					<TopBar>
						<Select label="所选车间" data={select1Data}/>
						<Select label="选择产品" data={select2Data}/>
						<Input label="批号"/>
						<DateRange label="时间选择"/>
						<Button text="查询"/>
						<Button text="近十日"/>
						<Button text="近一月"/>
					</TopBar>
					<Grid option={gridOption} data={DATA.grid}/>
				</Frame>
			</div>
		)
	}

	componentDidMount() {
	}


}

export { Page };