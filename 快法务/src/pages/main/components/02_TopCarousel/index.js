import React from "react";
import "./style.scss";
import dljz_banner from "./img/dljz_banner.png";
import jieshui_banner from "./img/jieshui_banner.png";
import khcs_banner from "./img/khcs_banner.jpg";
import new_high from "./img/new-high.jpg";
import new_transfer from "./img/new-transfer.jpg";

//走马灯图片数组
const carouselArr = [
	dljz_banner,
	jieshui_banner,
	khcs_banner,
	new_high,
	new_transfer
];

//左侧目录数组
const leftMenu = [
	"注册公司",
	"财税记账",
	"商标知产",
	"高新资质",
	"社保人事",
	"专业律师"
];

class Default extends React.Component {
	state = {
		currActiveImg: 0
	};

	render() {
		const { currActiveImg } = this.state;
		return (
			<div className="carousel-container">
				<div className="carousel">
					{carouselArr.map((item, i) => {
						return (
							<div
								key={"imgKey" + i}
								className={currActiveImg === i ? "active" : ""}
							/>
						);
					})}
				</div>
				<div className="screen-container">
					<ul className="points">
						{carouselArr.map((item, i) => {
							if (i === currActiveImg)
								return <li key={"plik" + i} className="active" />;
							return <li key={"plik" + i} />;
						})}
					</ul>
					<ul className="left-menu">
						{leftMenu.map((item, i) => {
							return <li key={"liKey" + i}>{item}</li>;
						})}
					</ul>
					<div className="right-details">
						<div className="main"></div>
						<div className="three-kids"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Default;
