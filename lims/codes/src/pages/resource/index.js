import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import resourceconsumablesinWarehouse from './resource-consumables-inWarehouse'
import resourceconsumablesstorage from './resource-consumables-storage'
import resourceconsumablesoutWarehouse from './resource-consumables-outWarehouse'
import resourcedeviceaccount from './resource-device-account'
import resourcedevicetestRecord from './resource-device-testRecord'
import resourcedevicerepaire from './resource-device-repaire'
import resourcedeviceoperation from './resource-device-operation'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/resource/consumables/inWarehouse'} component={resourceconsumablesinWarehouse} />
<Route path={rootUrl+'/resource/consumables/storage'} component={resourceconsumablesstorage} />
<Route path={rootUrl+'/resource/consumables/outWarehouse'} component={resourceconsumablesoutWarehouse} />
<Route path={rootUrl+'/resource/device/account'} component={resourcedeviceaccount} />
<Route path={rootUrl+'/resource/device/testRecord'} component={resourcedevicetestRecord} />
<Route path={rootUrl+'/resource/device/repaire'} component={resourcedevicerepaire} />
<Route path={rootUrl+'/resource/device/operation'} component={resourcedeviceoperation} />
	<Redirect from={rootUrl+"/resource"} to={"/resource/consumables"} />
			</Switch>
		);
	}
}

export default Default;
