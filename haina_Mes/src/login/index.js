
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//
class App extends Component {

	render() {
		return (
			<div>
				<p>login 节点在此</p>
				<button><Link to="/main">登录</Link></button>
			</div>
		)
	}

}


export default App;
