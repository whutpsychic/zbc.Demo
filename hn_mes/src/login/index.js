
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './login.css';



//
class App extends Component {

	render() {
		return (
			<div className="login-bg">

				<div className="login-form">
					<input type="text"/>
					<input type="password" />
					<div className="psw-container">
						<div className="check-box" ref="btn" onClick={this.clickpsw.bind(this)}></div>
						<p>记住密码</p>
					</div>
					<div className="login-btn"><Link to="/main">立即登录</Link></div>
				</div>
			</div>
		)
	}

	clickpsw() {

		if (this.refs.btn.className === "check-box") {
			this.refs.btn.className="check-box active"
		}
		else if (this.refs.btn.className === "check-box active"){
			this.refs.btn.className = "check-box"
		}

	}

}


export default App;
