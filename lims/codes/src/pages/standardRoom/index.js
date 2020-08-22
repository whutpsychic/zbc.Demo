import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import standardRoommaterialAccount from './standardRoom-materialAccount'
import standardRoommissionCreate from './standardRoom-missionCreate'
import standardRoomliquid from './standardRoom-liquid'
import standardRoomduringExamine from './standardRoom-duringExamine'

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={'/standardRoom/materialAccount'} component={standardRoommaterialAccount} />
<Route path={'/standardRoom/missionCreate'} component={standardRoommissionCreate} />
<Route path={'/standardRoom/liquid'} component={standardRoomliquid} />
<Route path={'/standardRoom/duringExamine'} component={standardRoomduringExamine} />
	<Redirect from={"/standardRoom"} to={"/standardRoom/materialAccount"} />
			</Switch>
		);
	}
}

export default Default;
