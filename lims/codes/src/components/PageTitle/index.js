import React from "react";
import "./style.css";

class Default extends React.Component {
	render() {
		const { title } = this.props;
		return <p className="page-title">{title}</p>;
	}
}

export default Default;
