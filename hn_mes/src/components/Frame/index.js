
import React, { Component } from 'react';
import './frame.css';

class Frame extends Component {


	render() {

		const { title, children } = this.props;

		const { style } = this.props;
		let _style = style || {};

		return (
			<div className="frame" style={_style}>
				<div className="frame-title"><p>{title}</p></div>
				<div className="frame-content">
					{children}
				</div>
			</div>
		)
	}

}

export default Frame;