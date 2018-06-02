
import React, { Component } from 'react';

import CanvasDiv from './CanvasDiv.js';

import DATA from '../data/data.js';



//提取公共方法
const drawLine = (context, start, end) => {

	context.moveTo(start.x, start.y);
	context.lineTo(end.x, end.y);

}

class RightPanel extends Component{

	render() {

		const { style } = this.props;
		
		let _style = (style.x && style.y) ? {
			width: style.x + "px",
			height: style.y + "px"
		} : {};

		//配置位置
		const positions = [
			{ top: '10px', left: '10px' },
			{ top: '255px', left: '10px' },
			{ top: '490px', left: '10px' },
			{ top: '10px', left: '300px' },
			{ top: '255px', left: '300px' },
			{ top: '10px', left: '612px' },
			{ top: '255px', left: '612px' }
		]

		return (
			<div style={{ position: "relative" }}>
				<canvas style={_style} ref="_canvas_"></canvas>
				{
					DATA.divs.map((item, index) => {
						return (<CanvasDiv key={index} title={item.title} bars={item.bars} blocks={item.blocks} position={positions[index]} />)
					})
				}
			</div>
			)
	}

	componentDidMount() {

		//画箭头
		//准备工作
		const { style } = this.props;

		var _canvas = this.refs._canvas_,
			_context = _canvas.getContext("2d");

		_canvas.width = style.x || 400;
		_canvas.height = style.y || 200;

		//开始画
		//分割线
		_context.beginPath();
		_context.strokeStyle = "#4390ff";

		_context.moveTo(580, 40);
		_context.lineTo(580, 666);

		_context.stroke();


		//

		console.log(_context);





	}



}

export default RightPanel;