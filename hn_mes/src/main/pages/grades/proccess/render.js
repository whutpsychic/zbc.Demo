
import React, { Component } from 'react';

import { Frame } from '../../../../components';
import { Grid } from '../../../../components';
import { Chart } from '../../../../components';

import tool from '../../../../tool';
import DATA from './data.js';

import gridOption from './gridOption.js';

class Page extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			chart1style: {height:"440px"}

		}
	}

	render() {

		const frame_style = { height: "auto" };

		return (
			<div className="with-left-menu">
				<Frame title="绩效流程" style={frame_style}>
					<Grid option={gridOption} data={DATA.grid}/>
				</Frame>
				<Frame title="绩效流程图" style={frame_style}>
					<Chart style={this.state.chart1style} option={DATA.getChartoption()}/>
				</Frame>
			</div>
		)
	}

	componentDidMount() {
	}


}

export { Page };