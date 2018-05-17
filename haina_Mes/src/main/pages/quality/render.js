
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LeftMenu } from '../../../components';
import tool from '../../../tool';
import { leftmenuCN } from '../../../data/CN';

import { QualityQuery } from './query';
import { QualityAnalyze } from './analyze';
import { QualityScore } from './score';
import { QualityStandard } from './standard';

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
					<Route exact path="/main/quality/query" component={QualityQuery}></Route>
					<Route exact path="/main/quality/analyze" component={QualityAnalyze}></Route>
					<Route exact path="/main/quality/score" component={QualityScore}></Route>
					<Route exact path="/main/quality/standard" component={QualityStandard}></Route>
					<Redirect from="/main/quality" to="/main/quality/query" />

					<Route component={NOTFOUND}></Route>

				</Switch>
			</div>
			)
	}






}

export default Quality;