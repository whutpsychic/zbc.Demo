
import React, { Component } from 'react';

class Button extends Component{

	render() {

		const { text } = this.props;

		return (
				<li className="top-bar-btn" onClick={this.clickBtn.bind(this)}>
					{text}
				</li>
			)
	}

	clickBtn() {
		const { onClick } = this.props;
		if (typeof onclick==="function")
		onClick();
	}

}

export default Button;