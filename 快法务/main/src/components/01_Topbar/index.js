import React, { Fragment } from "react";
import "./style.scss";
import logo from "./img/logo.png";

const locations = [
	"北京",
	"上海",
	"广州",
	"深圳",
	"南京",
	"杭州",
	"宁波",
	"苏州",
	"成都",
	"天津",
	"厦门",
	"重庆",
	"武汉",
	"西安",
	"衡水",
	"沈阳",
	"青岛",
	"秦皇岛",
	"石家庄",
	"沧州",
	"潍坊",
	"淄博",
	"合肥",
	"安庆",
	"滁州",
	"福州",
	"南通",
	"无锡",
	"太原",
	"贵阳",
	"宝鸡",
	"运城",
	"长治",
	"济南",
	"晋中",
	"全国"
];

const menu = [
	"首页",
	"工商财税",
	"知识产权",
	"法律服务",
	"人事社保",
	"快合财税",
	"代理记账"
];

class Default extends React.Component {
	state = {
		currentlocation: "北京",
		currActive: "首页"
	};

	render() {
		const { currentlocation, currActive } = this.state;

		return (
			<Fragment>
				<div className="top-header">
					<div className="screen-container">
						<div className="left-location-container">
							<div className="displayer">
								<i className="loc" />
								<span className="currloc">{currentlocation + "市"}</span>
								<i className="right-arrow" />
								<span className="spliter" />
							</div>
							<div className="alllocations">
								{locations.map(item => {
									return (
										<span
											key={"key" + item}
											onClick={() => {
												this.reloadloc(item);
											}}
										>
											{item}
										</span>
									);
								})}
							</div>
						</div>
						<div className="right-links">
							<span
								onClick={() => {
									this.defaultClick("登录按钮");
								}}
							>
								登录
							</span>
							<span className="spliter" />
							<span
								onClick={() => {
									this.defaultClick("注册按钮");
								}}
							>
								注册
							</span>
							<span className="spliter" />
							<span
								onClick={() => {
									this.defaultClick("服务者登录");
								}}
							>
								服务者登录
							</span>
						</div>
					</div>
				</div>
				<div className="top-bar">
					<div className="screen-container">
						<div className="logo-and-searcher">
							<img id="logo" alt={"logo"} src={logo} />
							<div className="searcher">
								<input placeholder={"搜索所需服务，如 注册公司"} />
								<div className="btn">搜索</div>
							</div>
						</div>
						<div className="left-and-menu">
							<div className="allClass">全部服务分类</div>
							<div className="menu">
								{menu.map((item, i) => {
									return (
										<span
											key={"menuitem" + i}
											onClick={() => {
												this.clickItem(item);
											}}
											className={item === currActive ? "active" : ""}
										>
											{item}
										</span>
									);
								})}
								<span className="tel">400-6683-666</span>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}

	defaultClick = txt => {
		alert("您点击了" + txt);
	};

	reloadloc = txt => {
		this.setState({
			currentlocation: txt
		});
	};

	clickItem = txt => {
		//reset active item
		this.setState({
			currActive: txt
		});
	};
}

export default Default;
