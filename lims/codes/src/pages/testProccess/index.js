import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import testProccesstestMission from './testProccess-testMission'
import testProccessweight from './testProccess-weight'
import testProccessproccessingTest from './testProccess-proccessingTest'
import testProccesssampleInput from './testProccess-sampleInput'
import testProccessmissionSubmit from './testProccess-missionSubmit'
import testProccessexamineOne from './testProccess-examineOne'
import testProccessexamineTwo from './testProccess-examineTwo'
import testProccessexamineThree from './testProccess-examineThree'

import { rootUrl } from "../../config.js";

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={rootUrl+'/testProccess/testMission'} component={testProccesstestMission} />
<Route path={rootUrl+'/testProccess/weight'} component={testProccessweight} />
<Route path={rootUrl+'/testProccess/proccessingTest'} component={testProccessproccessingTest} />
<Route path={rootUrl+'/testProccess/sampleInput'} component={testProccesssampleInput} />
<Route path={rootUrl+'/testProccess/missionSubmit'} component={testProccessmissionSubmit} />
<Route path={rootUrl+'/testProccess/examineOne'} component={testProccessexamineOne} />
<Route path={rootUrl+'/testProccess/examineTwo'} component={testProccessexamineTwo} />
<Route path={rootUrl+'/testProccess/examineThree'} component={testProccessexamineThree} />
	<Redirect from={rootUrl+"/testProccess"} to={"/testProccess/testMission"} />
			</Switch>
		);
	}
}

export default Default;
