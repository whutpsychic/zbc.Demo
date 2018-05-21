
import React, { Component } from 'react';

import { Frame } from '../../../../components';
import { TopBar, Select, Button } from '../../../../components';

import tool from '../../../../tool';
import DATA from './data.js';

import img from './bg.png';

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
		const img_style = { width: "100%" };

		const { select1Data, select2Data, select3Data, select4Data, select5Data } = this.state;

		return (
			<div className="with-left-menu">
				<Frame title="能源管网监控" style={frame_style}>
					<TopBar>
						<Select label="选择分厂" data={select1Data}/>
						<Select label="选择车间" data={select2Data}/>
						<Select label="选择监控对象" data={select3Data}/>
						<Button text="查询"/>
					</TopBar>
					<img alt="设计图" src={img} style={img_style}/>
				</Frame>

			</div>
		)
	}

	componentDidMount() {
	}


}

export { Page };