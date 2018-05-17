
import React, { Component } from 'react';

import { Frame } from '../../../../components';
import { Grid } from '../../../../components';
import { TopBar, Select, Input, Date, Button } from '../../../../components';

import tool from '../../../../tool';
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
				<Frame title="质量检验标准查询" style={frame_style}>
					<TopBar>
						<Select label="所选车间" data={select1Data} />
						<Select label="选择产品" data={select2Data} />
						<Input label="牌号" />
						<Button text="查询" />
					</TopBar>
					<Grid option={gridOption} data={DATA.grid} />
				</Frame>
			</div>
		)
	}

	componentDidMount() {
	}


}

export { Page };