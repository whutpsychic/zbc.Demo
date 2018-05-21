
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LeftMenu } from '../../../components';
import tool from '../../../tool';
import { leftmenuCN } from '../../../data/CN';

import { GradesAnalyze } from './analyze';
import { GradesProccess } from './proccess';

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
					<Route exact path="/main/grades/analyze" component={GradesAnalyze}></Route>
					<Route exact path="/main/grades/proccess" component={GradesProccess}></Route>

					<Redirect exact from="/main/grades" to="/main/grades/analyze" />

					<Route component={NOTFOUND}></Route>
				</Switch>
			</div>
			)
	}






}

export default Energy;