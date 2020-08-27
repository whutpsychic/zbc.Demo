import React, { Fragment } from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumb from "../../../components/Breadcrumb";
import TopBar from "../../../components/TopBar";
import Button from "../../../components/Btns";
import Table from "../../../components/Table";

import dao from "./dao";

const { TopBarLeft, TopBarRight } = TopBar;
const { Input, MonthPicker } = TopBar;

// 列配置
const columns = [
	"序号",
	"抽检类型",
	"样品名称",
	"抽检编号",
	"样品编号",
	"样品原号",
	"检测项目",
	"抽检结果",
	"原结果",
	"单位",
	"差值",
	"检测班组",
	"抽检检测人",
	"原检测人",
	"抽检人",
	"抽检时间",
	"备注"
].map((item, i) => {
	return { key: `key${i}`, title: `${item}`, dataIndex: `string${i}` };
});

class Default extends React.Component {
	state = {
		dataSource: []
	};

	componentDidMount() {
		this.refs.table.loading();
		dao.getTable().then(res => {
			this.setState({
				dataSource: res
			});
			if (this.refs.table) this.refs.table.loaded();
		});
	}

	render() {
		const { dataSource } = this.state;
		return (
			<Fragment>
				<PageTitle title="质量抽检" />
				<Breadcrumb />
				<div className="page-container">
					<TopBar>
						<TopBarLeft ref="conditions">
							<MonthPicker label={"选择月份"} field="string0" />
							<Input label={"抽检类型"} field="string1" />
							<Input label={"样品名称"} field="string2" />
							<Input label={"样品编号"} field="string2" />
							<Input label={"检测班组"} field="string2" />
						</TopBarLeft>
						<TopBarRight>
							<Button
								type="query"
								num={1}
								text="查询"
								onClick={this.onClickQuery}
							/>
							<Button type="cancel" num={2} text="导出" />
						</TopBarRight>
					</TopBar>
					<Table ref="table" columns={columns} dataSource={dataSource} />
				</div>
			</Fragment>
		);
	}

	onClickQuery = () => {
		let conditions = this.refs.conditions.getConditions();
		console.log(conditions);
	};
}

export default Default;
