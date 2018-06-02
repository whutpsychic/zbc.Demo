
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Panel } from '../pages';
import { Quality } from '../pages';
import { Plan } from '../pages';
import { Energy } from '../pages';
import { Grades } from '../pages';

import { NOTFOUND } from '../pages';
//<Redirect from="/main/quality" to="/main/quality/query" />

class Routes extends Component {


	render() {
		return (
			<Switch>
				<Route path="/main/panel" component={Panel}></Route>
	
				<Route path="/main/quality" component={Quality}></Route>
				<Route path="/main/plan" component={Plan}></Route>
				<Route path="/main/energy" component={Energy}></Route>
				<Route path="/main/grades" component={Grades}></Route>
				<Route path="/main/tools" component={NOTFOUND}></Route>
				<Route path="/main/device" component={NOTFOUND}></Route>
				<Route path="/main/statistics" component={NOTFOUND}></Route>

				<Redirect from="/main" to="/main/panel" />
				<Route component={NOTFOUND}></Route>

			
			</Switch>
			)
	} 



}




export default Routes;