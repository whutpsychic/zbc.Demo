import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import baseDatapersons from './baseData-persons'
import baseDatacustomer from './baseData-customer'
import baseDataenvironment from './baseData-environment'
import baseDatatestCharge from './baseData-testCharge'
import baseDatadictionary from './baseData-dictionary'

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={'/baseData/persons'} component={baseDatapersons} />
<Route path={'/baseData/customer'} component={baseDatacustomer} />
<Route path={'/baseData/environment'} component={baseDataenvironment} />
<Route path={'/baseData/testCharge'} component={baseDatatestCharge} />
<Route path={'/baseData/dictionary'} component={baseDatadictionary} />
	<Redirect from={"/baseData"} to={"/baseData/persons"} />
			</Switch>
		);
	}
}

export default Default;
