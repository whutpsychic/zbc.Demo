
import React, { Component } from 'react';

class TopBar extends Component {

	render() {

		const { children } = this.props;

		return (
			<ul className="top-bar-ul">
				{children}
			</ul>
		)
	}

}

export default TopBar;