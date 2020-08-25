import React from "react";
import { DatePicker } from "antd";

class Default extends React.Component {
	state = { value: null };
	render() {
		const { value } = this.state;
		return (
			<DatePicker
				{...this.props}
				value={value}
				onChange={value => {
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
