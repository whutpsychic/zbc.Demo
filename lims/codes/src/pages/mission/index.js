import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import missiondistribution from './mission-distribution'
import missionpersonDistribution from './mission-personDistribution'
import missionquery from './mission-query'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/mission/distribution'} component={missiondistribution} />
<Route path={rootUrl+'/mission/personDistribution'} component={missionpersonDistribution} />
<Route path={rootUrl+'/mission/query'} component={missionquery} />
	<Redirect from={rootUrl+"/mission"} to={"/mission/distribution"} />
			</Switch>
		);
	}
}

export default Default;
