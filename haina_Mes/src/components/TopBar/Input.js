
import React, { Component } from 'react';

class Input extends Component {

	render() {

		const { label } = this.props;

		var placeholder = this.props.placeholder || "";

		return (
			<li>
				<label>{label}</label>
				<input placeholder={placeholder}/>
			</li>
		)
	}

}

export default Input;