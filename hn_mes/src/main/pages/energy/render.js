
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LeftMenu } from '../../../components';
import tool from '../../../tool';
import { leftmenuCN } from '../../../data/CN';

import { EnergyMonitor} from './monitor';
import { EnergyAnalyzePie } from './analyze';
import { EnergyAnalyzeTrend } from './analyze';

import { NOTFOUND } from '../../pages';


class Energy extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			menuList: tool.getMenuLevel3(leftmenuCN, tool.getcurrMenuByLevel(2))
		}
	}


	render() {
		const { menuList } = this.state;
		const menuTitle = tool.getmenuTitle(leftmenuCN);

		return (
			<div>
				<LeftMenu list={menuList} title={menuTitle} />

				<Switch>
					<Route exact path="/main/energy/monitor" component={EnergyMonitor}></Route>
					<Route exact path="/main/energy/analyze/pie" component={EnergyAnalyzePie}></Route>
					<Route exact path="/main/energy/analyze/trend" component={EnergyAnalyzeTrend}></Route>

					<Redirect exact from="/main/energy" to="/main/energy/monitor" />
					<Redirect from="/main/energy/analyze" to="/main/energy/analyze/pie" />

					<Route component={NOTFOUND}></Route>
				</Switch>
			</div>
			)
	}






}

export default Energy;