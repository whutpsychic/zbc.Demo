
import React, { Component } from 'react';
import './roof.css';
import tool from '../../../tool';


class TopBar extends Component {

	constructor() {
		super(...arguments);
		this.state = {
			time:tool.getCurrTime()
		}
	}


	render() {

		return (
			<div className="roof">
				<div className="roof-container">
					<span>当前用户:管理员</span>
					<span>登陆时间:{this.state.time}</span>
					<span>工序: 2</span>
					<span>班组: 第二组</span>
					<span className="analyze icon" title="统计分析" onClick={this.clickAnalyze.bind(this)}></span>
					<span className="admin icon" title="设置" onClick={this.clickAdmin.bind(this)}></span>
					<span className="user icon" title="用户信息" onClick={this.clickUser.bind(this)}></span>
					<span className="exit icon" title="退出" onClick={this.clickExit.bind(this)}></span>
				</div>
			</div>
		)
	}

	clickAnalyze() {

	}

	clickAdmin() {

	}
	clickUser() {

	}

	clickExit() {
		//console.log(window.location.origin);
		//console.log(window.location.pathname);
		window.location.href = window.location.origin
	}
}

export default TopBar;