import React from "react";
import "./style.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import locale from "../../locale.js";
import { connect } from "react-redux";
import { setLanguage } from "../../redux/actions.js";

import flag_CN from "./flag-CN.png";
import flag_US from "./flag-US.png";

const langDistinguish = lang => {
	switch (lang) {
		case "CN":
			return "中文";
		case "EN":
			return "English";
		default:
			return "中文";
	}
};

const flagDistinguish = lang => {
	switch (lang) {
		case "CN":
			return flag_CN;
		case "EN":
			return flag_US;
		default:
			return flag_CN;
	}
};

class Default extends React.Component {
	// 语言
	language = (
		<Menu>
			<Menu.Item>
				<div
					className="select-flag-item"
					onClick={() => {
						const { setLanguageType } = this.props;
						setLanguageType("CN");
						locale.CN();
					}}
				>
					<img alt="flag" src={flag_CN} />
					<span>中文</span>
				</div>
			</Menu.Item>
			<Menu.Item>
				<div
					className="select-flag-item"
					onClick={() => {
						const { setLanguageType } = this.props;
						setLanguageType("EN");
						locale.EN();
					}}
				>
					<img alt="flag" src={flag_US} />
					<span>English</span>
				</div>
			</Menu.Item>
		</Menu>
	);

	render() {
		const { language } = this.props;
		return (
			<li className="li-for-language-flag">
				<img alt="flag" src={flagDistinguish(language)} />
				<Dropdown overlay={this.language} placement="bottomLeft" arrow>
					{
						<div className="top-select">
							<span>{langDistinguish(language)}</span>
							<DownOutlined />
						</div>
					}
				</Dropdown>
			</li>
		);
	}
}

const mapStateToProps = (state, props) => {
	return state;
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		setLanguageType: value => {
			dispatch(setLanguage(value));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Default);
