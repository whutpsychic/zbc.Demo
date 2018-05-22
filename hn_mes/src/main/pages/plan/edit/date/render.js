
import React, { Component } from 'react';

import { Frame } from '../../../../../components';
import { Grid } from '../../../../../components';
import { TopBar, Select, Date, Button } from '../../../../../components';

import DATA from './data.js';
import gridOption from './gridOption.js';

class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			select1Data: DATA.select1
		}
	}

	render() {

		const frame_style = { height: "auto" };
		const _pageStyle = { height: "780px" };

		const { select1Data } = this.state;

		return (
			<div className="with-left-menu" style={_pageStyle}>
				<Frame title="日计划编制" style={frame_style}>
					<TopBar>
						<Select label="计划类别" data={select1Data} />
						<Date label="起始日期" />
						<Date label="结束日期" />
						<Button text="新增" />
						<Button text="生成" />
						<Button text="计划分解" />
						<Button text="计划发布" />
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