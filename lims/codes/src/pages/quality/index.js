import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import qualitycontrolmission from './quality-control-mission'
import qualitycontrolcheckout from './quality-control-checkout'
import qualitycontrolcompaire from './quality-control-compaire'
import qualitycontrolpicture from './quality-control-picture'
import qualityexamineinnerExamine from './quality-examine-innerExamine'
import qualityexamineexamine from './quality-examine-examine'
import qualityexamineinconformity from './quality-examine-inconformity'
import qualityexaminecorrect from './quality-examine-correct'
import qualityexamineobjection from './quality-examine-objection'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/quality/control/mission'} component={qualitycontrolmission} />
<Route path={rootUrl+'/quality/control/checkout'} component={qualitycontrolcheckout} />
<Route path={rootUrl+'/quality/control/compaire'} component={qualitycontrolcompaire} />
<Route path={rootUrl+'/quality/control/picture'} component={qualitycontrolpicture} />
<Route path={rootUrl+'/quality/examine/innerExamine'} component={qualityexamineinnerExamine} />
<Route path={rootUrl+'/quality/examine/examine'} component={qualityexamineexamine} />
<Route path={rootUrl+'/quality/examine/inconformity'} component={qualityexamineinconformity} />
<Route path={rootUrl+'/quality/examine/correct'} component={qualityexaminecorrect} />
<Route path={rootUrl+'/quality/examine/objection'} component={qualityexamineobjection} />
	<Redirect from={rootUrl+"/quality"} to={"/quality/control"} />
			</Switch>
		);
	}
}

export default Default;
