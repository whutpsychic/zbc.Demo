import React, {Component} from 'react';
import './footer.css';

import _react from './logo/react.jpg';
import _redux from './logo/redux.jpg';
import _echarts from './logo/echarts.jpg';
import _antd from './logo/antd.svg';





class Footer extends Component {

	render() {

		let p1, p2, p3; p1 = p2 = p3 = "";

		//if (this.props.language === 'Chinese') { p1 = "招收广告位"; p2 = "中华人民共和国　ZBC"; p3 = "当前所在地区: 北京"; }
		//if (this.props.language === 'English') { p1 = "Recruit for Advertisment"; p2 = "People Republic Of China  ZBC"; p3 = "Current Area: BeiJing"; }

		p1 = "招收广告位"; p2 = "中华人民共和国"; p3 = "当前所在地区: 北京"; 

		return (
			<div className="bottom-bar">
				<p>{p1}</p>
				<div className="logo-container">
					<img src={_react} alt="react" /><span>React</span>
					<img src={_redux} alt="redux" /><span>Redux</span>
					<img src={_echarts} alt="echarts" /><span>Echarts</span>
					<img src={_antd} alt="ant-design" /><span>Ant-Design</span>
				</div>
				<p>Copyright©2017-2099　zbc  {p2}</p>
				<p>TEL:151xxxxx243　QQ:1511828529　{p3}</p>
			</div>
		)
	}
}


export default Footer;