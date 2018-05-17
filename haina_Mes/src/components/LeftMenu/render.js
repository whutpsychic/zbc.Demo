
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tool from '../../tool';

import './leftmenu.css';
import icon from './icons/collapse.png';

class Item extends Component {


	render() {

		const { children, to, active } = this.props;
		const position = "/" + window.location.pathname.split('/')[1] + "/" + window.location.pathname.split('/')[2];

		if (active)
			return (
				<li className="active">
					<Link to={position + '/' + to}>
						{children}
					</Link>
				</li>
			)
		return (
			<li>
				<Link to={position + '/' + to}>
					{children}
				</Link>
			</li>
			)
	}





}

class LeftMenu extends Component {

	render() {

		const { list, title } = this.props;
		const _loc = tool.getcurrMenuByLevel(3)

		return (
			<div className="left-menu">
				<div className="menu-title">
					<img src={icon} alt="缩进" />
					<span>{title}</span>
				</div>
				<ul>
					{
						list.map((item, index) => {
							if (_loc === item.name)
								return <Item key={index} to={item.name} active>{item.text}</Item>
							return <Item key={index} to={item.name}>{item.text}</Item>
						})
					}
				</ul>
			</div>
		)
	}

}


export default LeftMenu;
