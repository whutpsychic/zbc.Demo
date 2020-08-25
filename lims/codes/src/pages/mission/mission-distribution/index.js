import React, { Fragment } from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumb from "../../../components/Breadcrumb";
import Table from "../../../components/Table";
import TopBar from "../../../components/TopBar";
import Button from "../../../components/Btns";

import dao from "./dao";

const { TopBarLeft, TopBarRight } = TopBar;
const { Select, Input, DateRange } = TopBar;

// 列配置
const columns = [
	"序号",
	"合同状态",
	"合同编号",
	"合同模板类型",
	"总样品编号",
	"总样品名称",
	"检测项目",
	"受检单位",
	"联系人",
	"联系电话",
	"生效时间",
	"完成时间",
	"录入人",
	"录入时间"
].map((item, i) => {
	return { title: `${item}`, dataIndex: `string${i}`, key: `c1key${i}` };
});

// 列配置
const columns2 = [
	"序号",
	"状态",
	"收样日期",
	"样品名称",
	"样品批号",
	"检测编号",
	"样品原号",
	"样品条码",
	"样品类别",
	"贵重金属",
	"重量(体积)",
	"样品数量",
	"检测项",
	"备注"
].map((item, i) => {
	return { title: `${item}`, dataIndex: `string${i}`, key: `c2key${i}` };
});

class Default extends React.Component {
	state = {
		dataSource: []
	};

	componentDidMount() {
		this.refs.table.loading();
		this.refs.table2.loading();
		dao.getTable().then(res => {
			this.setState({
				dataSource: res
			});
			if (this.refs.table) this.refs.table.loaded();
			if (this.refs.table2) this.refs.table2.loaded();
		});
	}

	render() {
		const { dataSource } = this.state;
		return (
			<Fragment>
				<PageTitle title="任务分配" />
				<Breadcrumb />
				<div className="page-container">
					<TopBar>
						<TopBarLeft ref="conditions">
							<DateRange label={"创建时间"} field="string0" />
							<Select
								label={"任务单状态"}
								field="string1"
								data={[
									{ label: "状态1", value: "state1" },
									{ label: "状态2", value: "state2" },
									{ label: "状态3", value: "state3" }
								]}
							/>
							<Select
								label={"任务单类型"}
								field="string2"
								data={[
									{ label: "类型1", value: "state1" },
									{ label: "类型2", value: "state2" },
									{ label: "类型3", value: "state3" }
								]}
							/>
							<Input label={"任务单号"} field="string3" />
						</TopBarLeft>
						<TopBarRight>
							<Button
								type="query"
								num={1}
								text="查询"
								onClick={this.onClickQuery}
							/>
							<Button type="add" num={2} text="新增" />
							<Button type="edit" num={3} text="编辑" />
							<Button type="delete" num={4} text="删除" />
							<Button type="de" num={5} text="分配" />
							<Button type="cancel" num={6} text="取消分配" />
						</TopBarRight>
					</TopBar>
					<Table
						ref="table"
						columns={columns}
						dataSource={dataSource}
						selectable
					/>
					<Table
						ref="table2"
						columns={columns2}
						dataSource={dataSource}
						selectable
					/>
				</div>
			</Fragment>
		);
	}
}

export default Default;
