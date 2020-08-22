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

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/quality/mission'} component={qualitymission} />
<Route path={rootUrl+'/quality/checkout'} component={qualitycheckout} />
<Route path={rootUrl+'/quality/compaire'} component={qualitycompaire} />
<Route path={rootUrl+'/quality/picture'} component={qualitypicture} />
<Route path={rootUrl+'/quality/innerExamine'} component={qualityinnerExamine} />
<Route path={rootUrl+'/quality/examine'} component={qualityexamine} />
<Route path={rootUrl+'/quality/inconformity'} component={qualityinconformity} />
<Route path={rootUrl+'/quality/correct'} component={qualitycorrect} />
<Route path={rootUrl+'/quality/objection'} component={qualityobjection} />
	<Redirect from={rootUrl+"/quality"} to={"/quality/mission"} />
			</Switch>
		);
	}
}

export default Default;
