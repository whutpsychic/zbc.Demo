import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import qualitymission from './quality-mission'
import qualitycheckout from './quality-checkout'
import qualitycompaire from './quality-compaire'
import qualitypicture from './quality-picture'
import qualityinnerExamine from './quality-innerExamine'
import qualityexamine from './quality-examine'
import qualityinconformity from './quality-inconformity'
import qualitycorrect from './quality-correct'
import qualityobjection from './quality-objection'

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={'/quality/mission'} component={qualitymission} />
<Route path={'/quality/checkout'} component={qualitycheckout} />
<Route path={'/quality/compaire'} component={qualitycompaire} />
<Route path={'/quality/picture'} component={qualitypicture} />
<Route path={'/quality/innerExamine'} component={qualityinnerExamine} />
<Route path={'/quality/examine'} component={qualityexamine} />
<Route path={'/quality/inconformity'} component={qualityinconformity} />
<Route path={'/quality/correct'} component={qualitycorrect} />
<Route path={'/quality/objection'} component={qualityobjection} />
	<Redirect from={"/quality"} to={"/quality/mission"} />
			</Switch>
		);
	}
}

export default Default;
