import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import sampleregister from './sample-register'
import sampleinput from './sample-input'
import samplemachin from './sample-machin'
import samplemanagement from './sample-management'
import sampleretention from './sample-retention'
import sampletrack from './sample-track'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/sample/register'} component={sampleregister} />
<Route path={rootUrl+'/sample/input'} component={sampleinput} />
<Route path={rootUrl+'/sample/machin'} component={samplemachin} />
<Route path={rootUrl+'/sample/management'} component={samplemanagement} />
<Route path={rootUrl+'/sample/retention'} component={sampleretention} />
<Route path={rootUrl+'/sample/track'} component={sampletrack} />
	<Redirect from={rootUrl+"/sample"} to={"/sample/register"} />
			</Switch>
		);
	}
}

export default Default;
