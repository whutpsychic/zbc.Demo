import React, { Component } from "react";
import "./style.css";
import TitleText from "./TitleText.js";
import Panel1 from "./Panel.js";

class Default extends Component {
	render() {
		return (
			<div className="home-container">
				<div className="top-title-texts">
					<TitleText></TitleText>
				</div>
				<div className="middle-panels">
					<Panel1 />
					<Panel2 />
					<Panel3 />
				</div>
				<div className="chart-container-for-line">
					<Chart1 />
					<Chart2 />
				</div>
				<div className="chart-container-for-line">
					<Chart3 />
					<Chart4 />
				</div>
				<div className="chart-container-for-line">
					<Chart5 />
				</div>
			</div>
		);
	}
}

export default Default;
