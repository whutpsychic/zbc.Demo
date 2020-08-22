import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import reportorganize from './report-organize'
import reportexamine from './report-examine'
import reportrelease from './report-release'
import reportquery from './report-query'

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={'/report/organize'} component={reportorganize} />
<Route path={'/report/examine'} component={reportexamine} />
<Route path={'/report/release'} component={reportrelease} />
<Route path={'/report/query'} component={reportquery} />
	<Redirect from={"/report"} to={"/report/organize"} />
			</Switch>
		);
	}
}

export default Default;
