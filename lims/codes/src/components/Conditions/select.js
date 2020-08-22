import React from "react";
import { Select } from "antd";
import "./select.css";

const { Option } = Select;

class Default extends React.Component {
	state = { value: null };
	render() {
		const { data = [] } = this.props;
		const { value } = this.state;
		return (
			<Select
				{...this.props}
				value={value}
				onChange={value => {
					this.setState({ value });
				}}
			>
				{data.map((item, i) => {
					return (
						<Option key={`op${i}`} value={item.value}>
							{item.label}
						</Option>
					);
				})}
			</Select>
		);
	}

	getValue = () => {
		return this.state.value;
	};
}

export default Default;
