import React from "react";
import "./style.scss";

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

class Default extends React.Component {
	state = {
		currentlocation: "北京"
	};

	render() {
		const { currentlocation } = this.state;

		return (
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
}

export default Default;
