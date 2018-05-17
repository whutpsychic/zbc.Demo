
import React, { Component } from 'react';

class Select extends Component {

	render() {

		const { label } = this.props;

		var data = this.props.data || [];

		return (
			<li>
				<label>{label}</label>
				<select onChange={this.changeSelect.bind(this)}>
					{
						data.map((item, index) => {
							return <option key={index} value={item.value}>{item.text}</option>
						})
					}
				</select>
			</li>
		)
	}

	changeSelect(v) {
		const { onChange } = this.props;
		if (typeof onChange === "function")
			onChange(v);
	}

}

export default Select;