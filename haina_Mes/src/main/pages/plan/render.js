
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LeftMenu } from '../../../components';
import tool from '../../../tool';
import { leftmenuCN } from '../../../data/CN';

import { PlanQuery } from './query';

import { PlanEditYear } from './edit';
import { PlanEditMonth } from './edit';
import { PlanEditDate } from './edit';

import { PlanMonitor } from './monitor';

import { NOTFOUND } from '../../pages';


class Quality extends Component {

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
					<Route exact path="/main/plan/query" component={PlanQuery}></Route>

					<Route exact path="/main/plan/edit/year" component={PlanEditYear}></Route>
					<Route exact path="/main/plan/edit/month" component={PlanEditMonth}></Route>
					<Route exact path="/main/plan/edit/date" component={PlanEditDate}></Route>

					<Route exact path="/main/plan/monitor" component={PlanMonitor}></Route>

					<Redirect exact from="/main/plan" to="/main/plan/query" />
					<Redirect exact from="/main/plan/edit" to="/main/plan/edit/year" />

					<Route component={NOTFOUND}></Route>

				</Switch>
			</div>
			)
	}






}

export default Quality;