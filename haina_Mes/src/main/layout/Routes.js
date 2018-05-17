
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Quality } from '../pages';
import { Plan } from '../pages';


import { NOTFOUND } from '../pages';
//<Redirect from="/main/quality" to="/main/quality/query" />

class Routes extends Component {


	render() {
		return (
			<Switch>
				<Route path="/main/panel" component={Quality}></Route>
	
				<Route path="/main/quality" component={Quality}></Route>
				<Route path="/main/plan" component={Plan}></Route>
				<Route path="/main/energy" component={Quality}></Route>
				<Route path="/main/grades" component={Quality}></Route>
				<Route path="/main/tools" component={Quality}></Route>
				<Route path="/main/device" component={Quality}></Route>
				<Route path="/main/statistics" component={Quality}></Route>









				<Route component={NOTFOUND}></Route>

				<Redirect from="/main" to="/main/panel" />
			</Switch>
			)
	} 



}




export default Routes;