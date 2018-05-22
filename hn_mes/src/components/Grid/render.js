
import React, { Component } from 'react';
import './grid.css';




class Th extends Component {

	render() {

		const { children } = this.props;

		return (
			<th>{children}</th>
			)
	}

}

class Td extends Component {

	render() {

		const { children } = this.props;
		const { inner } = this.props;

		if (inner)
			return (
				<td
					dangerouslySetInnerHTML={inner}
				>
					{children}
				</td>
			)


		return (
			<td>
				{children}
			</td>
		)
	}

}

class DataBar extends Component{

	render() {

		const { data } = this.props;
		const { columns } = this.props || [];
		const { operations } = this.props || [];

		let _op = () => {

			if (operations&&operations.length)
				return (
					<Td>
						{
							operations.map((item, index) => {
								return <a key={index} onClick={item.fn(data)}>{item.text}</a>
							})
						}
					</Td>
				)

			return;
		}

		return (
			<tr>
				{_op()}
				{
					columns.map((item, index) => {

						if (!item.name) return null;

						if (typeof item.render === "function") {
							return (
								<Td key={index}
									inner={{ __html: item.render(data[item.name])}}
								>
								</Td>
							)
						}

						else if (typeof item.render === "string") {
							return (
								<Td key={index} >
									{item.render}
								</Td>
							)
						}

						else {
							return (
								<Td key={index} >
									{data[item.name]}
								</Td>
							)
						}
					})
				}
			</tr>
			)

	}

}


class Grid extends Component {

	render() {

		const { option, data } = this.props;

		return (
			<div className="grid-container">
				<table className="z-Grid">
					<tbody>
						<tr>
							{
								option.columns.map((item, index) => {
									return <Th key={index}>{item.title}</Th>
								})
							}
						</tr>
					
						{
							data.map((item, index) => {
								return <DataBar key={index} data={item} columns={option.columns} operations={option.operations} />
							})
						}

					</tbody>
				</table>
			</div>
			)
	}








}


export default Grid;
