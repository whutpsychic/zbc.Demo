import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import contractacceptance from './contract-acceptance'
import contractreview from './contract-review'
import contractquery from './contract-query'
import contractzzzzzzzbbbbbb1 from './contract-zzzzzzz-bbbbbb1'
import contractzzzzzzzcccccc2 from './contract-zzzzzzz-cccccc2'
import contractzzzzzzzcccccc3 from './contract-zzzzzzz-cccccc3'
import contractzzzzzzzcccccc4 from './contract-zzzzzzz-cccccc4'
import contractzzzzzzzcccccc5 from './contract-zzzzzzz-cccccc5'
import contractzzzzzzzcccccc6 from './contract-zzzzzzz-cccccc6'
import contractzzzzzzzcccccc7 from './contract-zzzzzzz-cccccc7'
import contractzzzzzzzcccccc8 from './contract-zzzzzzz-cccccc8'
import contractzzzzzzzcccccc9 from './contract-zzzzzzz-cccccc9'

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={'/contract/acceptance'} component={contractacceptance} />
<Route path={'/contract/review'} component={contractreview} />
<Route path={'/contract/query'} component={contractquery} />
<Route path={'/contract/zzzzzzz/bbbbbb1'} component={contractzzzzzzzbbbbbb1} />
<Route path={'/contract/zzzzzzz/cccccc2'} component={contractzzzzzzzcccccc2} />
<Route path={'/contract/zzzzzzz/cccccc3'} component={contractzzzzzzzcccccc3} />
<Route path={'/contract/zzzzzzz/cccccc4'} component={contractzzzzzzzcccccc4} />
<Route path={'/contract/zzzzzzz/cccccc5'} component={contractzzzzzzzcccccc5} />
<Route path={'/contract/zzzzzzz/cccccc6'} component={contractzzzzzzzcccccc6} />
<Route path={'/contract/zzzzzzz/cccccc7'} component={contractzzzzzzzcccccc7} />
<Route path={'/contract/zzzzzzz/cccccc8'} component={contractzzzzzzzcccccc8} />
<Route path={'/contract/zzzzzzz/cccccc9'} component={contractzzzzzzzcccccc9} />
	<Redirect from={"/contract"} to={"/contract/acceptance"} />
			</Switch>
		);
	}
}

export default Default;
