import React from "react";
import { Route, Switch } from "react-router-dom";
import tool from "../tool/index";
import { connect } from "react-redux";
import { shrinkLeftMenu } from "../redux/actions.js";

import TopHeader from "./submain/TopHeader.js";
import LeftMenu from "./submain/LeftMenu.js";

import baseData from "../pages/baseData/index.js";
import contract from "../pages/contract/index.js";
import file from "../pages/file/index.js";
import home from "../pages/home/index.js";
import mission from "../pages/mission/index.js";
import quality from "../pages/quality/index.js";
import report from "../pages/report/index.js";
import resource from "../pages/resource/index.js";
import sample from "../pages/sample/index.js";
import standard from "../pages/standard/index.js";
import standardRoom from "../pages/standardRoom/index.js";
import statistics from "../pages/statistics/index.js";
import testProccess from "../pages/testProccess/index.js";

class Default extends React.Component {
	componentDidMount() {
		//
		tool.jumpFn = this.props.history.push;
	}

	render() {
		const { shrinkLeftMenu } = this.props;
		return (
			<React.Fragment>
				<TopHeader />
				<div className={"ui"}>
					<LeftMenu history={this.props.history} />
					<div
						className={shrinkLeftMenu ? "main-content no-left" : "main-content"}
					>
						<Switch>
							<Route path="/baseData" component={baseData} />
							<Route path="/contract" component={contract} />
							<Route path="/file" component={file} />
							<Route path="/home" component={home} />
							<Route path="/mission" component={mission} />
							<Route path="/quality" component={quality} />
							<Route path="/report" component={report} />
							<Route path="/resource" component={resource} />
							<Route path="/sample" component={sample} />
							<Route path="/standard" component={standard} />
							<Route path="/standardRoom" component={standardRoom} />
							<Route path="/statistics" component={statistics} />
							<Route path="/testProccess" component={testProccess} />
						</Switch>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state, props) => {
	return state;
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		shrinkMenu: bool => {
			dispatch(shrinkLeftMenu(bool));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Default);
