import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import contractacceptance from './contract-acceptance'
import contractreview from './contract-review'
import contractquery from './contract-query'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/contract/acceptance'} component={contractacceptance} />
<Route path={rootUrl+'/contract/review'} component={contractreview} />
<Route path={rootUrl+'/contract/query'} component={contractquery} />
	<Redirect from={rootUrl+"/contract"} to={"/contract/acceptance"} />
			</Switch>
		);
	}
}

export default Default;
