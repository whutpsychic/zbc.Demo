
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LeftMenu } from '../../../components';
import tool from '../../../tool';
import { leftmenuCN } from '../../../data/CN';

import { PlanQuery } from './query';

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
					<Redirect from="/main/plan" to="/main/plan/query" />

					<Route component={NOTFOUND}></Route>

				</Switch>
			</div>
			)
	}






}

export default Quality;