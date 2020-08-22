import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import standardtestItem from './standard-testItem'
import standardtestStandard from './standard-testStandard'
import standardtemplate from './standard-template'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/standard/testItem'} component={standardtestItem} />
<Route path={rootUrl+'/standard/testStandard'} component={standardtestStandard} />
<Route path={rootUrl+'/standard/template'} component={standardtemplate} />
	<Redirect from={rootUrl+"/standard"} to={"/standard/testItem"} />
			</Switch>
		);
	}
}

export default Default;
