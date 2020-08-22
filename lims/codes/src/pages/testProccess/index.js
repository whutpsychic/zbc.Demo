import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import testProccesstestMission from './testProccess-testMission'
import testProccessweigh from './testProccess-weigh'
import testProccessproccessingTest from './testProccess-proccessingTest'
import testProccesssampleInput from './testProccess-sampleInput'
import testProccessmissionSubmit from './testProccess-missionSubmit'
import testProccessexamineOne from './testProccess-examineOne'
import testProccessexamineTwo from './testProccess-examineTwo'
import testProccessexamineThree from './testProccess-examineThree'

class Default extends React.Component {
	render() {
		return (
			<Switch>
			<Route path={'/testProccess/testMission'} component={testProccesstestMission} />
<Route path={'/testProccess/weigh'} component={testProccessweigh} />
<Route path={'/testProccess/proccessingTest'} component={testProccessproccessingTest} />
<Route path={'/testProccess/sampleInput'} component={testProccesssampleInput} />
<Route path={'/testProccess/missionSubmit'} component={testProccessmissionSubmit} />
<Route path={'/testProccess/examineOne'} component={testProccessexamineOne} />
<Route path={'/testProccess/examineTwo'} component={testProccessexamineTwo} />
<Route path={'/testProccess/examineThree'} component={testProccessexamineThree} />
	<Redirect from={"/testProccess"} to={"/testProccess/testMission"} />
			</Switch>
		);
	}
}

export default Default;
