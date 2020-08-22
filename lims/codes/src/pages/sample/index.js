import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import sampleregister from './sample-register'
import sampleinput from './sample-input'
import samplemachin from './sample-machin'
import samplemanagement from './sample-management'
import sampleretention from './sample-retention'
import sampletrack from './sample-track'

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={'/sample/register'} component={sampleregister} />
<Route path={'/sample/input'} component={sampleinput} />
<Route path={'/sample/machin'} component={samplemachin} />
<Route path={'/sample/management'} component={samplemanagement} />
<Route path={'/sample/retention'} component={sampleretention} />
<Route path={'/sample/track'} component={sampletrack} />
	<Redirect from={"/sample"} to={"/sample/register"} />
			</Switch>
		);
	}
}

export default Default;
