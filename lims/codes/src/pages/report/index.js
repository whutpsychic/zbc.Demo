import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import reportorganize from './report-organize'
import reportexamine from './report-examine'
import reportrelease from './report-release'
import reportquery from './report-query'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/report/organize'} component={reportorganize} />
<Route path={rootUrl+'/report/examine'} component={reportexamine} />
<Route path={rootUrl+'/report/release'} component={reportrelease} />
<Route path={rootUrl+'/report/query'} component={reportquery} />
	<Redirect from={rootUrl+"/report"} to={"/report/organize"} />
			</Switch>
		);
	}
}

export default Default;
