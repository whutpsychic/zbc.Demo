import React from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

class Default extends React.Component {
	state = { value: null };
	render() {
		const { value } = this.state;
		return (
			<RangePicker
				{...this.props}
				value={value}
				onChange={valueArr => {
					this.setState({
						value: valueArr
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
