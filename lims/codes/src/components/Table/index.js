import React from "react";
import "./style.css";
import { Table } from "antd";

// 一页几条
const lineNumber = 10;

// 补齐尾页空项
const supplement = dataSource => {
	if (!dataSource || !dataSource.length) return [];
	let num = lineNumber - (dataSource.length % lineNumber);
	for (let i = 0; i < num; i++) {
		dataSource.push({ key: `ei${i}`, it_is_a_empty_item: true });
	}
	return dataSource;
};

// 判断是否已经在当中了
const itHas = (arr, it) => {
	let res = arr.filter(item => {
		return it.key === item.key;
	});

	return res.length;
};

// 将某项从数组中剔除
const getItOff = (arr, it) => {
	let result = arr.filter(item => {
		return item.key !== it.key;
	});
	return result;
};

// 将某些项统统从数组中剔除
const getThemOff = (arr, arr2) => {
	let result = [...arr];

	arr2.forEach(item => {
		result = getItOff(result, item);
	});

	return result;
};

class Default extends React.Component {
	state = {
		loading: false,

		// 选择的项
		selectedRows: []
	};

	render() {
		const { dataSource, selectable } = this.props;
		const { loading } = this.state;
		let _dataSource = supplement(dataSource);
		return (
			<div className="table-container">
				<Table
					{...this.props}
					loading={loading}
					dataSource={_dataSource}
					rowClassName={"com-table-row"}
					pagination={{ pageSize: lineNumber }}
					onHeaderRow={() => {
						return {
							className: "com-table-header-row"
						};
					}}
					rowSelection={
						selectable
							? {
									onSelect: this.onSelectRow,
									onSelectAll: this.onSelectAllRow,
									getCheckboxProps: record => {
										return { disabled: record[`it_is_a_empty_item`] }; // Column configuration not to be checked
									}
							  }
							: undefined
					}
				/>
			</div>
		);
	}

	onSelectRow = row => {
		console.log(row)
		const { selectedRows } = this.state;
		if (itHas(selectedRows, row)) {
			let resultArr = getItOff(selectedRows, row);
			this.setState({
				selectedRows: resultArr
			});
		} else {
			this.setState({
				selectedRows: [...selectedRows, row]
			});
		}
	};

	onSelectAllRow = (bool, data, allData) => {
		console.log(bool)
		console.log(data)
		console.log(allData)
		const { selectedRows } = this.state;
		// 如果选中了当前页所有
		if (bool) {
			let newArr = [...new Set([...selectedRows, ...allData])];
			this.setState({
				selectedRows: newArr
			});
		}
		// 如果取消了当前页所有
		else {
			let newArr = getThemOff(selectedRows, allData);
			this.setState({
				selectedRows: newArr
			});
		}
	};

	// ================================================ 暴露的方法

	getSelectedRows = () => {
		const { selectedRows } = this.state;
		return selectedRows;
	};

	loading = () => {
		this.setState({
			loading: true
		});
	};

	loaded = () => {
		this.setState({
			loading: false
		});
	};
}

export default Default;
