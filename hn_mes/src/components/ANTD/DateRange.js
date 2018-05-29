
import React, { Component } from 'react';

import { RangePicker } from 'antd/lib/date-picker';
import locale from 'antd/lib/date-picker/locale/zh_CN';


class DateRange extends Component {

	render() {

		const { onChange } = this.props || (() => { });

		const { label } = this.props;

		//识别当前格式
		let { mode } = this.props;

		return (
			<li>
				<label>{label}</label>
				<RangePicker
					locale={locale}
					onChange={onChange}
					mode={mode || ["date", "date"]}
				/>
			</li>
		)
	}

}


export default DateRange;
