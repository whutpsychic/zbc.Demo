import React from "react";
import "./style.scss";
import data from "./data";

const { carouselArr, leftMenu, MenuData } = data;

class Default extends React.Component {
	state = {
		currActiveImg: 0,
		currMenuDetail: null
	};

	render() {
		const { currActiveImg, currMenuDetail } = this.state;
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
					<ul
						className="left-menu"
						onMouseOut={e => {
							this.showMenuDetail(null);
						}}
					>
						{leftMenu.map((item, i) => {
							return (
								<li
									key={"liKey" + i}
									onMouseOver={e => {
										this.showMenuDetail(i);
									}}
								>
									{item}
								</li>
							);
						})}
					</ul>
					{typeof currMenuDetail === "number" ? (
						<div className="right-details">
							<div className="main">
								{this.renderMenu(MenuData[currMenuDetail].menu)}
							</div>
							<div className="three-kids">
								{this.renderPics(MenuData[currMenuDetail].steps)}
							</div>
						</div>
					) : null}
				</div>
			</div>
		);
	}

	showMenuDetail = i => {
		this.setState({ currMenuDetail: 0 });
	};
}

export default Default;
