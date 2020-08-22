import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import baseDatapersons from './baseData-persons'
import baseDatacustomer from './baseData-customer'
import baseDataenvironment from './baseData-environment'
import baseDatatestCharge from './baseData-testCharge'
import baseDatadictionary from './baseData-dictionary'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/baseData/persons'} component={baseDatapersons} />
<Route path={rootUrl+'/baseData/customer'} component={baseDatacustomer} />
<Route path={rootUrl+'/baseData/environment'} component={baseDataenvironment} />
<Route path={rootUrl+'/baseData/testCharge'} component={baseDatatestCharge} />
<Route path={rootUrl+'/baseData/dictionary'} component={baseDatadictionary} />
	<Redirect from={rootUrl+"/baseData"} to={"/baseData/persons"} />
			</Switch>
		);
	}
}

export default Default;
