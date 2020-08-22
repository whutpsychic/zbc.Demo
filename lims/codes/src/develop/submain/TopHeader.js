import React from "react";
import { message } from "antd";
import { connect } from "react-redux";
import {
	shrinkLeftMenu,
	setLanguage,
	setAlertData,
	setMsgData
} from "../../redux/actions.js";
import { Menu, Dropdown } from "antd";
import { DownOutlined, LoadingOutlined } from "@ant-design/icons";
import LanguageFlags from "../../components/LanguageFlags";
import locale from "../../locale.js";
import dao from "./dao-for-TopHeader.js";

import sh from "../../imgs/left-menu-shrink.png";
import st from "../../imgs/left-menu-stretch.png";

import logo from "../../imgs/logo.png";
import top_icon_alert from "../../imgs/top-icon-alert.png";
import top_icon_msg from "../../imgs/top-icon-msg.png";
import top_icon_user_img from "../../imgs/top-icon-user-img.png";

//渲染警报数据
const renderAlertDropDownList = (data, fn, loadingData) => {
	if (loadingData)
		return (
			<div className="loading-info-container">
				<LoadingOutlined />
			</div>
		);
	if (!data || !data.length)
		return (
			<Menu>
				<Menu.Item>
					<span>没有数据！</span>
				</Menu.Item>
			</Menu>
		);
	return (
		<Menu>
			{data.map((item, i) => {
				return (
					<Menu.Item key={`item${i}`}>
						<span
							onClick={() => {
								if (typeof fn === "function") {
									fn(item);
								}
							}}
						>
							{item.text}
						</span>
					</Menu.Item>
				);
			})}
		</Menu>
	);
};

//渲染信息数据
const renderMsgDropDownList = (data, fn, loadingData) => {
	if (loadingData)
		return (
			<div className="loading-info-container">
				<LoadingOutlined />
			</div>
		);
	if (!data || !data.length)
		return (
			<Menu>
				<Menu.Item>
					<span>没有数据！</span>
				</Menu.Item>
			</Menu>
		);
	return (
		<Menu>
			{data.map((item, i) => {
				return (
					<Menu.Item key={`item${i}`}>
						<span
							onClick={() => {
								if (typeof fn === "function") {
									fn(item);
								}
							}}
						>
							{item.text}
						</span>
					</Menu.Item>
				);
			})}
		</Menu>
	);
};

class Default extends React.Component {
	state = {
		userName: "zbc",

		loadingAlertData: true,
		loadingMsgData: true
	};

	componentDidMount() {}

	// 用户
	user = (
		<Menu>
			<Menu.Item>
				<span
					onClick={() => {
						window.location.pathname = "/";
					}}
				>
					退出登录
				</span>
			</Menu.Item>
		</Menu>
	);

	render() {
		const { shrinkLeftMenu } = this.props;
		const { language, alertData, msgData } = this.props;
		const { loadingMsgData, loadingAlertData, userName } = this.state;

		return (
			<header className="top-header">
				<div className="logo-container">
					<div
						className="menu-op-btn"
						onClick={() => {
							shrinkLeftMenu ? this.onShrinkMenu() : this.onStretchMenu();
						}}
					>
						{shrinkLeftMenu ? (
							<img alt="sh" src={sh} />
						) : (
							<img alt="st" src={st} />
						)}
						<span>菜单</span>
					</div>
					<img alt={"logo"} src={logo} className="logo" />
				</div>
				<div className="right-addons">
					<ul>
						<LanguageFlags />
						<li>
							<Dropdown
								overlay={() =>
									renderAlertDropDownList(
										alertData,
										this.onClickAlertItem,
										loadingAlertData
									)
								}
								onVisibleChange={this.onQueryAlertData}
								placement="bottomLeft"
								arrow
							>
								{
									<div className="top-icon-item">
										<img alt="alert" src={top_icon_alert} />
										{alertData.length ? (
											<span className="alert-count">{alertData.length}</span>
										) : null}
									</div>
								}
							</Dropdown>
						</li>
						<li>
							<Dropdown
								overlay={() =>
									renderMsgDropDownList(
										msgData,
										this.onClickMsgItem,
										loadingMsgData
									)
								}
								onVisibleChange={this.onQueryMsgData}
								placement="bottomLeft"
								arrow
							>
								{
									<div className="top-icon-item">
										<img alt="msg" src={top_icon_msg} />
										{msgData.length ? (
											<span className="msg-count">{msgData.length}</span>
										) : null}
									</div>
								}
							</Dropdown>
						</li>
						<li className="with-img">
							<img alt="user" src={top_icon_user_img} />
							<Dropdown overlay={this.user} placement="bottomLeft" arrow>
								{
									<div className="top-select">
										<span>{userName}</span>
										<DownOutlined />
									</div>
								}
							</Dropdown>
						</li>
					</ul>
				</div>
			</header>
		);
	}

	onShrinkMenu = () => {
		const { shrinkMenu } = this.props;
		shrinkMenu(false);
	};

	onStretchMenu = () => {
		const { shrinkMenu } = this.props;
		shrinkMenu(true);
	};

	// 查询警报事件
	onQueryAlertData = bool => {
		const { setAlertData, alertData } = this.props;
		if (bool && !alertData.length) {
			dao.getAlertData().then(res => {
				setAlertData(res);
				this.setState({
					loadingAlertData: false
				});
			});
		}
	};
	// 查询信息事件
	onQueryMsgData = bool => {
		const { setMsgData, msgData } = this.props;
		if (bool && !msgData.length) {
			dao.getMsgData().then(res => {
				setMsgData(res);
				this.setState({
					loadingMsgData: false
				});
			});
		}
	};

	// 点击alert项事件
	onClickAlertItem = item => {
		message.info(`您点击了${item.text}`);
	};

	// 点击msg项事件
	onClickMsgItem = item => {
		message.info(`您点击了${item.text}`);
	};
}

const mapStateToProps = (state, props) => {
	return state;
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		shrinkMenu: bool => {
			dispatch(shrinkLeftMenu(bool));
		},
		// setLanguageType: value => {
		// 	dispatch(setLanguage(value));
		// },
		setAlertData: data => {
			dispatch(setAlertData(data));
		},
		setMsgData: data => {
			dispatch(setMsgData(data));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Default);
