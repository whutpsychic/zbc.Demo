import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import standardRoommaterialAccount from './standardRoom-materialAccount'
import standardRoommissionCreate from './standardRoom-missionCreate'
import standardRoomliquid from './standardRoom-liquid'
import standardRoomduringExamine from './standardRoom-duringExamine'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/standardRoom/materialAccount'} component={standardRoommaterialAccount} />
<Route path={rootUrl+'/standardRoom/missionCreate'} component={standardRoommissionCreate} />
<Route path={rootUrl+'/standardRoom/liquid'} component={standardRoomliquid} />
<Route path={rootUrl+'/standardRoom/duringExamine'} component={standardRoomduringExamine} />
	<Redirect from={rootUrl+"/standardRoom"} to={"/standardRoom/materialAccount"} />
			</Switch>
		);
	}
}

export default Default;
