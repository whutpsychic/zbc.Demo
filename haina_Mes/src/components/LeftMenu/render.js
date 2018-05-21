
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tool from '../../tool';

import './leftmenu.css';
import icon from './icons/collapse.png';


//二级菜单项
class Item2 extends Component {

	render() {

		const { to, children } = this.props;
		const position = "/" + window.location.pathname.split('/')[1] + "/" + window.location.pathname.split('/')[2] + "/" + window.location.pathname.split('/')[3];
		const _curr = window.location.pathname.split('/')[4];

		let _cls = "";
		if (to === _curr) _cls = 'active';

		return (
			<li className={_cls}>
				<Link to={position + '/' + to}>
					{children}
				</Link>
			</li>
			)
	}
}

//一级菜单项
class Item extends Component {

	render() {

		const { children, kids, to, active } = this.props;
		const position = "/" + window.location.pathname.split('/')[1] + "/" + window.location.pathname.split('/')[2];

		let _cls = ""; 
		let _ul2cls = "left-menu-level2";

		if (active) {
			_cls += "active";
			return (
				<li className={_cls}>
					<Link to={position + '/' + to}>
						{children}
					</Link>
					<ul className={_ul2cls}>
						{
							kids.map((item, index) => {
								return <Item2 key={index} to={item.name}>{item.text}</Item2>
							})
						}
					</ul>
				</li>
			)
		}

		return (
			<li className={_cls}>
				<Link to={position + '/' + to}>
					{children}
				</Link>
			</li>
		)


	}

}

//整体menu对象
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
				<ul className="left-menu-level1">
					{
						list.map((item, index) => {
							if (_loc === item.name)
								return <Item key={index} to={item.name} kids={item.children || []} active>{item.text}</Item>
							return <Item key={index} to={item.name} kids={item.children || []}>{item.text}</Item>
						})
					}
				</ul>
			</div>
		)
	}

}


export default LeftMenu;
