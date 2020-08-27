import React from "react";
import tool from "../tool";
import "./login.css";
import LanguageFlags from "../components/LanguageFlags/index";

import loginText from "../imgs/login-text.png";
import logoSmall from "../imgs/logo-small.png";
import user from "../imgs/user.png";
import psw from "../imgs/psw.png";

import { rootUrl } from "../config.js";

class Default extends React.Component {
	componentDidMount() {
		//
		tool.jumpFn = this.props.history.push;
	}

	render() {
		return (
			<div className="login-screen">
				<ul className="top-right">
					<LanguageFlags />
					<li>
						<img alt="logo" className="logo" src={logoSmall} />
					</li>
				</ul>
				<div className="main-container">
					<img alt="login-text" src={loginText} />
					<div className="form-container">
						<ul>
							<li>
								<img alt="img" src={user} />
								<input type="text" placeholder={"输入账号"} />
							</li>
							<li>
								<img alt="img" src={psw} />
								<input type="password" placeholder={"输入密码"} />
							</li>
							<li className="login-btn" onClick={this.onClickLogin}>
								<div>登录</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}

	onClickLogin = () => {
		tool.jump(`${rootUrl}/home`);
	};
}

export default Default;
