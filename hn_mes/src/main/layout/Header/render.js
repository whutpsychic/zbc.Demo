
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import path from '../../../path.js';

import './header.css';
import logo from './images/logo.png';

import device from './images/device.png';
import energy from './images/energy.png';
import grades from './images/grades.png';
import panel from './images/panel.png';
import plan from './images/plan.png';
import quality from './images/quality.png';
import statistics from './images/statistics.png';
import tools from './images/tools.png';

import { changeMenu } from './actions.js';
import tool from '../../../tool';

var list = [
	{ icon: panel, name: "panel" },
	{ icon: quality, name: "quality" },
	{ icon: plan, name: "plan" },
	{ icon: energy, name: "energy" },
	{ icon: grades, name: "grades" },
	{ icon: tools, name: "tools" },
	{ icon: device, name: "device" },
	{ icon: statistics, name: "statistics" }
];

list = tool.spliceArr('name', path, list);

class MenuItem extends Component {

	render() {

		const { text, icon, loc, position } = this.props;

		if (position === loc)
			return (
				<li className="active">
					<img alt={text} src={icon} />
					<nobr>{text}</nobr>
				</li>
			)

		return (
			<li>
				<Link to={loc} onClick={this.clickMenu.bind(this)}>
					<img alt={text} src={icon} />
					<nobr>{text}</nobr>
				</Link>
			</li>
			)
	}

	clickMenu() {
		const { loc } = this.props;
		const { onClick } = this.props;
		onClick(loc)
	}

	clickMenuActive() {
		return;
	}

}

class Header extends Component {

	render() {
		var { position } = this.props;
		position = "/" + position.split('/')[1] + "/" + position.split('/')[2];

		return (
			<div className="header">
				<img src={logo} alt="logo" />
				<ul className="menu-list-container">
					{
						list.map((item, index) => {
							return (<MenuItem key={index} text={item.text} icon={item.icon} loc={item.route} position={position} onClick={this.clickMenuItem.bind(this)}></MenuItem>)
						})
					}
				</ul>
			</div>
			)
	}

	clickMenuItem(loc) {
		const { changeMenuFn } = this.props;
		changeMenuFn(loc);
	}

}

const mapStateToProps = (state) => {
	//console.log(state)
	return {
		position: state.currMenu
	};
}

const mapDispatchToProps = (dispatch) => {

	return {
		changeMenuFn: (loc) => {
			dispatch(changeMenu(loc))
		}
	};
}




export default connect(mapStateToProps, mapDispatchToProps)(Header);