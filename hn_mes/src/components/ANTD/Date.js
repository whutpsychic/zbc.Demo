
import React, { Component } from 'react';

import DatePicker from 'antd/lib/date-picker';

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
					onChange={onChange}
					mode={mode}
				/>
			</li>
		)
	}

}


export default Date;
