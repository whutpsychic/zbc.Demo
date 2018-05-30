
import React, { Component } from 'react';

import { RangePicker } from 'antd/lib/date-picker';
import locale from 'antd/lib/date-picker/locale/zh_CN';

class DateRange extends Component {

	state = {
		value: []
	};

	handlePanelChange = (value, mode) => {
		console.log(this.state.value)
		this.setState({
			value
		});

		const { onChange } = this.props;
		if (typeof onChange === "function")
			onChange(value);
	}

	render() {

		const { label } = this.props;
		const { value } = this.state;
		//识别当前格式
		let { mode } = this.props;

		if (!mode) mode = ["date", "date"];

		//处理格式
		let _format = "YYYY-MM-DD";
		if (mode[0] === "date") _format = "YYYY-MM-DD";
		else if (mode[0] === "month") _format = "YYYY-MM";
		else if (mode[0] === "year") _format = "YYYY";

		if(mode[0]==="month")
		return (
			<li>
				<label>{label}</label>
				<RangePicker
					locale={locale}
					value={value}
					format={_format}
					onPanelChange={this.handlePanelChange.bind(this)}
					mode={mode}
				/>
			</li>
			)

			return (
				<li>
					<label>{label}</label>
					<RangePicker
						locale={locale}
						format={_format}
						onPanelChange={this.handlePanelChange.bind(this)}
					/>
				</li>
			)
	}

}


export default DateRange;
