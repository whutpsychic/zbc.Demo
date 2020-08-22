import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import missiondistribution from './mission-distribution'
import missionpersonDistribution from './mission-personDistribution'
import missionquery from './mission-query'

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={'/mission/distribution'} component={missiondistribution} />
<Route path={'/mission/personDistribution'} component={missionpersonDistribution} />
<Route path={'/mission/query'} component={missionquery} />
	<Redirect from={"/mission"} to={"/mission/distribution"} />
			</Switch>
		);
	}
}

export default Default;
