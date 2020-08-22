// 纯文字型面包屑
import React from "react";
import "./style.css";
import { Breadcrumb } from "antd";
import menuData from "../../develop/menu.js";

import location from "./position.png";

const getBreadcrumb = () => {
	const { pathname } = window.location;

	let arr = pathname.split("/").filter(item => {
		return item;
	});

	let resultArr = [];
	let operatingArr = menuData;

	for (let i = 0; i < arr.length; i++) {
		let res = operatingArr.filter(item => {
			return item.address === arr[i];
		})[0];
		resultArr.push(res.title);
		operatingArr = res.children && res.children.length ? res.children : [];
	}

	return resultArr;
};

class Default extends React.Component {
	render() {
		const data = getBreadcrumb();
		return (
			<div className="top-bread-crumb-container">
				<div className="top-bread-crumb-content">
					<img alt="img" src={location} />
					<Breadcrumb>
						<Breadcrumb.Item>
							<span className="location-text">{"首页"}</span>
						</Breadcrumb.Item>
						{data.map((item, i) => {
							return (
								<Breadcrumb.Item key={`bitem${i}`}>
									<span className="location-text">{item}</span>
								</Breadcrumb.Item>
							);
						})}
					</Breadcrumb>
				</div>
			</div>
		);
	}
}

export default Default;
