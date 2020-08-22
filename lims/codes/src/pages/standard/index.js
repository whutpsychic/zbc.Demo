import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import standardtestItem from './standard-testItem'
import standardtestStandard from './standard-testStandard'
import standardtemplate from './standard-template'

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={'/standard/testItem'} component={standardtestItem} />
<Route path={'/standard/testStandard'} component={standardtestStandard} />
<Route path={'/standard/template'} component={standardtemplate} />
	<Redirect from={"/standard"} to={"/standard/testItem"} />
			</Switch>
		);
	}
}

export default Default;
