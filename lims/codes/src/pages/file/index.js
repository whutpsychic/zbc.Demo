import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import fileupload from './file-upload'
import filedownload from './file-download'
import filecatalog from './file-catalog'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/file/upload'} component={fileupload} />
<Route path={rootUrl+'/file/download'} component={filedownload} />
<Route path={rootUrl+'/file/catalog'} component={filecatalog} />
	<Redirect from={rootUrl+"/file"} to={"/file/upload"} />
			</Switch>
		);
	}
}

export default Default;
