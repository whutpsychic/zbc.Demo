import React from "react";
import menuData from "../menu.js";
import { Menu } from "antd";
import tool from "../../tool/index";
import { connect } from "react-redux";
import { shrinkLeftMenu } from "../../redux/actions";

import { rootUrl } from "../../config.js";

const { SubMenu } = Menu;

class Default extends React.Component {
	state = {
		openKeys: [],
		selectedKeys: []
	};

	componentDidMount() {
		//具体修复动作(初始化)
		let obj = this.fixUpMenuContent();
		this.setState({
			openKeys: [obj.openKeys],
			selectedKeys: [obj.selectedKeys]
		});

		//监听路由变化事件
		this.props.history.listen(route => {
			//具体修复动作
			let obj = this.fixUpMenuContent(route.pathname);
			this.setState({
				openKeys: [obj.openKeys],
				selectedKeys: [obj.selectedKeys]
			});
		});
	}

	renderMenu = data => {
		return data.map((dataItem, i) => {
			const { children, title, address } = dataItem;
			if (children instanceof Array && children.length)
				return (
					<SubMenu
						key={`${address}`}
						title={
							<div className="menu-text-item">
								<span>{title}</span>
							</div>
						}
					>
						{children.map((item, j) => {
							if (item.children && item.children.length) {
								return (
									<Menu.Item key={`${address}/${item.address}`}>
										<div className={"three-m"}>
											<Menu
												theme="dark"
												selectedKeys={this.state.selectedKeys}
												onSelect={t => {
													t.domEvent.preventDefault();
													t.domEvent.stopPropagation();
													this.onSelectT(t);
												}}
											>
												<SubMenu title={item.title}>
													<Menu.Item key={null}>
														<span className="three-m-text">{item.title}</span>
													</Menu.Item>
													{item.children.map((_item, _j) => {
														return (
															<Menu.Item
																key={`${address}/${item.address}/${_item.address}`}
															>
																<span className="three-m-text">
																	{_item.title}
																</span>
															</Menu.Item>
														);
													})}
												</SubMenu>
											</Menu>
										</div>
									</Menu.Item>
								);
							}

							return (
								<Menu.Item key={`${address}/${item.address}`}>
									<span>{item.title}</span>
								</Menu.Item>
							);
						})}
					</SubMenu>
				);
			else
				return (
					<Menu.Item key={`${address}`}>
						<div className="menu-text-item">
							<span>{title}</span>
						</div>
					</Menu.Item>
				);
		});
	};

	//修复Menu当前项显示
	fixUpMenuContent = str => {
		let pathstr = str ? str : window.location.pathname;
		// ====================
		pathstr = pathstr.replace(`${rootUrl}`, "");
		// ====================
		let tempArr = pathstr.split("/");
		let openKeys = tempArr[1];
		let selectedKeys = tempArr[2];
		let thSelectedKeys = tempArr[3];
		return {
			openKeys: openKeys,
			selectedKeys: thSelectedKeys
				? `${openKeys}/${selectedKeys}/${thSelectedKeys}`
				: selectedKeys
				? `${openKeys}/${selectedKeys}`
				: `${openKeys}`
		};
	};

	onOpenChange = openKeys => {
		const latestOpenKey = openKeys.find(
			key => this.state.openKeys.indexOf(key) === -1
		);
		this.setState({
			openKeys: [latestOpenKey]
		});
	};

	onSelect = target => {
		const { key, selectedKeys } = target;
		if (!key || key === "null") return;
		//跳转到目标页
		tool.jump(`${rootUrl}/${key}`);
		//设置菜单显示目标
		this.setState({
			selectedKeys: selectedKeys
		});
	};

	onSelectT = target => {
		const { key, selectedKeys } = target;
		if (!key || key === "null") return;
		//跳转到目标页
		tool.jump(`${rootUrl}/${key}`);
		//设置菜单显示目标
		this.setState({
			selectedKeys: selectedKeys
		});
	};

	render() {
		const { shrinkLeftMenu } = this.props;
		return (
			<div className={shrinkLeftMenu ? "left-section no-left" : "left-section"}>
				<div
					className={
						shrinkLeftMenu ? "left-menu-container hide" : "left-menu-container"
					}
				>
					<Menu
						mode="inline"
						theme="dark"
						openKeys={this.state.openKeys}
						selectedKeys={this.state.selectedKeys}
						onOpenChange={this.onOpenChange}
						onSelect={this.onSelect}
						style={{ width: "100%" }}
					>
						{this.renderMenu(menuData)}
					</Menu>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return state;
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		shrinkMenu: bool => {
			dispatch(shrinkLeftMenu(bool));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Default);
