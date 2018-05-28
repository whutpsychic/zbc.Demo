
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tool from '../../tool';

import './leftmenu.css';
import icon from './icons/collapse.png';

import Transition from 'react-addons-css-transition-group';

//二级菜单项
class Item2 extends Component {

	render() {

		const { to, children, active } = this.props;
		const position = "/" + window.location.hash.split('/')[1] + "/" + window.location.hash.split('/')[2] + "/" + window.location.hash.split('/')[3];
		const _curr = window.location.hash.split('/')[4];

		let _cls = "";
		if (to === _curr) _cls = 'active';

		if(active)
			return (

			<li className={_cls}>
				<a>
					{children}
				</a>
			</li>
		)

		return (

			<li className={_cls}>
				<Link to={position + '/' + to}>
					{children}
				</Link>
			</li>
			)
	}
}

//二级菜单
class Menu2 extends Component {

	render() {

		const { show, data } = this.props;

		if(show)
			return (
				<Transition
					transitionName="menu-level2"
					transitionAppear={true}
					transitionAppearTimeout={200}
					transitionEnter={true}
					transitionLeave={true}
					transitionEnterTimeout={200}
					transitionLeaveTimeout={200}
				>
					<ul className="left-menu-level2">
						{
							data.map((item, index) => {

								//判断是否是当前页
								const active = item.name === window.location.hash.split('/')[4] ? true : false;

								return (
									<Item2 key={index} to={item.name} active={active}>{item.text}</Item2>
							)
							})
						}
					</ul>
					</Transition >
			)

		return (
			<Transition
				transitionName="menu-level2"
				transitionAppear={true}
				transitionAppearTimeout={400}
				transitionEnter={true}
				transitionLeave={true}
				transitionEnterTimeout={400}
				transitionLeaveTimeout={400}
			/>
			)

	}

}

//一级菜单项
class Item extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			showChilds:false
		}
	}

	render() {

		const { children, kids, to, active } = this.props;
		const position = "/" + window.location.hash.split('/')[1] + "/" + window.location.hash.split('/')[2];

		let _cls = ""; 

		const { showChilds } = this.state;

		if (active) {
			_cls += "active";
			return (
				<li className={_cls}>
					<a>
						{children}
					</a>
					<Menu2 data={kids} show={showChilds}></Menu2>
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

	componentDidMount() {


		setTimeout(() => {
			this.setState({
				showChilds:true
			})
		}, 400);
	}

}

//整体menu对象
class LeftMenu extends Component {

	render() {

		const { list, title } = this.props;
		const _loc = tool.getcurrMenuByLevel(3)

		let _style = {};

		if (!list.length) _style = { display: "none" };

		return (
			<div className="left-menu" style={_style}>
				<div className="menu-title">
					<img src={icon} alt="缩进" />
					<span>{title}</span>
				</div>
				<Transition
					transitionName="menu-level1"
					transitionAppear={true}
					transitionAppearTimeout={400}
					transitionEnter={true}
					transitionLeave={true}
					transitionEnterTimeout={400}
					transitionLeaveTimeout={400}
				>
					<ul className="left-menu-level1">
						{
							list.map((item, index) => {
								if (_loc === item.name)
									return <Item key={index} to={item.name} kids={item.children || []} active>{item.text}</Item>
								return <Item key={index} to={item.name} kids={item.children || []}>{item.text}</Item>
							})
						}
					</ul>
				</Transition>
			</div>
		)
	}

}


export default LeftMenu;
