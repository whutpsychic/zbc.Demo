import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import resourceinWarehouse from './resource-inWarehouse'
import resourcestorage from './resource-storage'
import resourceoutWarehouse from './resource-outWarehouse'
import resourcedeviceAccount from './resource-deviceAccount'
import resourcetestRecord from './resource-testRecord'
import resourcerepaire from './resource-repaire'
import resourceoperation from './resource-operation'

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={'/resource/inWarehouse'} component={resourceinWarehouse} />
<Route path={'/resource/storage'} component={resourcestorage} />
<Route path={'/resource/outWarehouse'} component={resourceoutWarehouse} />
<Route path={'/resource/deviceAccount'} component={resourcedeviceAccount} />
<Route path={'/resource/testRecord'} component={resourcetestRecord} />
<Route path={'/resource/repaire'} component={resourcerepaire} />
<Route path={'/resource/operation'} component={resourceoperation} />
	<Redirect from={"/resource"} to={"/resource/inWarehouse"} />
			</Switch>
		);
	}
}

export default Default;
