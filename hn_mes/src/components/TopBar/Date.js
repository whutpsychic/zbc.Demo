
import React, { Component } from 'react';

class Date extends Component {

	render() {

		const { label } = this.props;

		var placeholder = this.props.placeholder || "请输入日期";

		return (
			<li>
				<label>{label}</label>
				<input placeholder={placeholder} />
			</li>
		)
	}

}

export default Date;