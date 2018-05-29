
import React, { Component } from 'react';

import { RangePicker } from 'antd/lib/date-picker';

class DateRange extends Component {

	render() {

		const { onChange } = this.props || (() => { });

		const { label } = this.props;

		//识别当前格式
		const { mode } = this.props || ["time","time"];

		return (
			<li>
				<label>{label}</label>
				<RangePicker
					onChange={onChange}
					mode={mode}
				/>
			</li>
		)
	}

}


export default DateRange;
