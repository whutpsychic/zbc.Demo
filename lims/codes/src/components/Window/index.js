import React from "react";
import "./style.css";

class Default extends React.Component {
	state = {
		show: false
	};

	render() {
		const { title } = this.props;
		const { show } = this.state;
		return (
			<div
				className={
					show ? "window-container-outer" : "window-container-outer hide"
				}
			>
				<div className={"msk"} onClick={this.hide} />
				<div className={show ? "window-container" : "window-container hide"}>
					<p className="window-title">{title}</p>
					<div className="window-main-contents">{this.props.children}</div>
				</div>
			</div>
		);
	}

	show = () => {
		this.setState({
			show: true
		});
	};

	hide = () => {
		this.setState({
			show: false
		});
	};
}

export default Default;
