
import React, { Component } from 'react';

import { Frame } from '../../../../components';
import { Grid } from '../../../../components';
import { Chart } from '../../../../components';
import { TopBar, Select, Button } from '../../../../components';

import DATA from './data.js';

import gridOption from './gridOption.js';

class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			select1Data: DATA.select1,

			chart1Style: {height:"500px"}
		}
	}

	render() {

		const frame_style = { height: "auto" };

		const { select1Data} = this.state;

		return (
			<div className="with-left-menu">
				<Frame title="绩效分析" style={frame_style}>
					<TopBar>
						<Select label="选择对象" data={select1Data}/>
						<Button text="上一年"/>
						<Button text="当年"/>
						<Button text="下一年"/>
					</TopBar>
					<Grid option={gridOption} data={DATA.grid}/>
				</Frame>
				<Frame title="绩效趋势图" style={frame_style}>
					<TopBar>
						<Select label="选择对象" data={select1Data} />
					</TopBar>
					<Chart option={DATA.getChartoption()} style={this.state.chart1Style}/>
				</Frame>
			</div>
		)
	}

	componentDidMount() {
	}


}

export { Page };