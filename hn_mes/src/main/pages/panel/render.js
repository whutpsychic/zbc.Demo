
import React, { Component } from 'react';

import "./panel.css";

import tool from '../../../tool';
import { ClockChart } from '../../../components';
import {Grid} from '../../../components';
import RightPanel from './view/RightPanel.js';

import DATA from './data/data.js';
import gridOption from './data/gridOption.js';

import icon1 from "./media/icon1.png";
import icon2 from "./media/icon2.png";


const returnTimer = () => {

	let _date_ = new Date();

	let _hour, _minute, _second, _date, _month, _year, _w = NaN;

	_hour = _date_.getHours();
	_minute = _date_.getMinutes();
	_second = _date_.getSeconds();

	_date = _date_.getDate();
	_month = _date_.getMonth()+1;
	_year = _date_.getFullYear();

	_w = _date_.getDay();

	if (_w === 1) _w = "一";
	else if (_w === 2) _w = "二";
	else if (_w === 3) _w = "三";
	else if (_w === 4) _w = "四";
	else if (_w === 5) _w = "五";
	else if (_w === 6) _w = "六";
	else if (_w === 7) _w = "日";

	return {
		dateStr: _year + "年" + _month + "月" + _date + "日",
		weekDay: "星期" + _w
	}

}

class Panel extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			closeKey: null,

			leftTopTimer:'',
			leftTopWeek: '',
			leftTopDate:'',

			leftTopSaveDays:"0288"
		}
	}


	render() {

		const { leftTopTimer, leftTopDate, leftTopWeek, leftTopSaveDays} = this.state;

		const canvasStyle = {
			x: 920,
			y: 732
		}

		return (
			<div className="page-panel-container">
				<div className="panel">
					<div className="left-section">
						<div className="locking-panel left-block">
							<div className="clock">
								<ClockChart />
							</div>
							<div className="right-timer">
								<p>{leftTopTimer}</p>
								<p>{leftTopWeek}</p>
								<p>{leftTopDate}</p>
							</div>
							<div className="bottom-info">
								<p>安全生产天数：<span>{leftTopSaveDays}</span>天</p>
							</div>
						</div>
						<div className="locking-panel left-block">
							<div className="panel-title">
								<p>公司简介</p>
								<img className="right-img" alt="右侧图标" src={icon2} />
							</div>
							<div className="left-block-content text-content">
								青海盐湖工业股份有限公司（中文简称“盐湖股份”，英文全称QingHai Salt Lake Industry Co.,Ltd.,证券代码000792）是青海省国有资产监督管理委员会管理的省属大型上市国有企业，主要从事化学原料及化学制品制造。公司位于青海省格尔木市，是中国目前水平领先的化工厂之一。
							</div>
						</div>
						<div className="locking-panel left-block">
							<div className="panel-title">
								<p>生产调度</p>
								<img className="right-img" alt="右侧图标" src={icon1} />
							</div>
							<div className="left-block-content">
								<Grid option={gridOption} data={DATA.grid} />
							</div>
						</div>
					</div>
					<div className="right-section">
						<div className="locking-panel right-block">
							<p className="locking-block-title">循环经济产业链</p>
							<RightPanel style={canvasStyle} />
						</div>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {

		var _key = setInterval(() => {

			let timeObj = returnTimer();

			this.setState({
				leftTopTimer: tool.getCurrTime({ type: "time" }),
				leftTopWeek: timeObj.weekDay,
				leftTopDate: timeObj.dateStr
			})

		}, 1000);

		this.setState({
			closeKey: _key
		})

	}

	componentWillUnmount() {

		window.clearInterval(this.state.closeKey);
	}


}

export default Panel;