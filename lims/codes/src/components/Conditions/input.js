import React from "react";
import { Input } from "antd";

class Default extends React.Component {
	state = { value: "" };

	render() {
		const { value } = this.state;
		return (
			<Input
				{...this.props}
				value={value}
				onChange={e => {
					let value = e.target.value;
					this.setState({
						value: value
					});
				}}
			/>
		);
	}

	getValue = () => {
		return this.state.value;
	};
}

export default Default;
