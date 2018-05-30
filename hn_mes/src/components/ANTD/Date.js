
import React, { Component } from 'react';

import DatePicker from 'antd/lib/date-picker';
import locale from 'antd/lib/date-picker/locale/zh_CN';

class Date extends Component {

	state = {
		value: NaN
	}

	render() {

		const { label } = this.props;
		const { value } = this.state;

		//模式识别
		let { mode } = this.props || "date";

		//处理格式
		let _format;
		if (mode === "date") _format = "YYYY-MM-DD";
		else if (mode === "month") _format = "YYYY-MM";
		else if (mode === "year") _format = "YYYY";

			return (
				<li>
					<label>{label}</label>
					<DatePicker
						locale={locale}
						mode={mode}
						format={_format}
						value={value}
						onPanelChange={this.handlePanelChange}
					/>
				</li>
			)
	}

	handlePanelChange = (value, mode) => {
		this.setState({ value });
	}


}


export default Date;
