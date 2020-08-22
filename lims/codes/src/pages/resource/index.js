import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import resourceinWarehouse from './resource-inWarehouse'
import resourcestorage from './resource-storage'
import resourceoutWarehouse from './resource-outWarehouse'
import resourcedeviceAccount from './resource-deviceAccount'
import resourcetestRecord from './resource-testRecord'
import resourcerepaire from './resource-repaire'
import resourceoperation from './resource-operation'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/resource/inWarehouse'} component={resourceinWarehouse} />
<Route path={rootUrl+'/resource/storage'} component={resourcestorage} />
<Route path={rootUrl+'/resource/outWarehouse'} component={resourceoutWarehouse} />
<Route path={rootUrl+'/resource/deviceAccount'} component={resourcedeviceAccount} />
<Route path={rootUrl+'/resource/testRecord'} component={resourcetestRecord} />
<Route path={rootUrl+'/resource/repaire'} component={resourcerepaire} />
<Route path={rootUrl+'/resource/operation'} component={resourceoperation} />
	<Redirect from={rootUrl+"/resource"} to={"/resource/inWarehouse"} />
			</Switch>
		);
	}
}

export default Default;
