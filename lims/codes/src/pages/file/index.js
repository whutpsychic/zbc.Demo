import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import fileupload from './file-upload'
import filedownload from './file-download'
import filecatalog from './file-catalog'

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={'/file/upload'} component={fileupload} />
<Route path={'/file/download'} component={filedownload} />
<Route path={'/file/catalog'} component={filecatalog} />
	<Redirect from={"/file"} to={"/file/upload"} />
			</Switch>
		);
	}
}

export default Default;
