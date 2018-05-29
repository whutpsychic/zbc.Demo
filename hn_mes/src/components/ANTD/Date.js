
import React, { Component } from 'react';

import DatePicker from 'antd/lib/date-picker';
import locale from 'antd/lib/date-picker/locale/zh_CN';

class Date extends Component {

	render() {

		const { onChange } = this.props || (() => { });

		const { label } = this.props;

		//模式识别
		const { mode } = this.props||"time";

		return (
			<li>
				<label>{label}</label>
				<DatePicker
					locale={locale}
					onChange={onChange}
					mode={mode}
					placeholder="请选择时间"
				/>
			</li>
		)
	}

}


export default Date;
