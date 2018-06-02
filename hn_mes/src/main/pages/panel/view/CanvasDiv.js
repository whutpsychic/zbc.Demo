
import React, { Component } from 'react';


class DataBar extends Component {

	render() {

		const { title, data } = this.props;

		return (
			<div className="inner-data-div">
				<p>{title}</p>
				<p>产量：<span>{data[0]}</span> 销量：<span>{data[1]}</span> 库存：<span>{data[2]}</span></p>
			</div>
		)
	}
}

class DataBlock extends Component {


	render() {

		const { data, label, color } = this.props;

		return (
			<div className="inner-data-block">
				<p className={color}>{data}</p>
				<p>{label}</p>
			</div>
		)
	}

}

class CanvasDiv extends Component{

	render() {

		let { bars, blocks, position, title } = this.props;

		if (!bars) bars = [];
		if (!blocks) blocks = [];

		return (
			<div className="inner-div" style={position}>
				<p className="block-title">{title}</p>
				{
					bars.map((item, index) => {
						return <DataBar key={index} title={item.title} data={item.data} />
					})
				}
				<div className="block-container">
					{
						blocks.map((item, index) => {
							return <DataBlock key={index} data={item.data} label={item.label} color={item.color} />
						})
					}
				</div>
			</div>
		)
	}

	componentDidMount() {


	}



}

export default CanvasDiv;