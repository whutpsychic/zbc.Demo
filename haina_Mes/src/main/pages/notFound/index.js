import React, { Component } from 'react';
import img from './404.png';

class NOTFOUND extends Component {


	render() {

		const _style = {
			textAlign: "center"
		}

		const imgStyle = { marginTop: "100px" };

		return (
			<div style={_style}>
				<img src={img} alt="404" style={imgStyle}/>
			</div>
			)
	}
}

export default NOTFOUND;