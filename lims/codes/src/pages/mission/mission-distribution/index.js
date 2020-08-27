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
	"任务单状态",
	"任务单编号",
	"任务单类型",
	"创建人",
	"创建时间",
	"备注"
].map((item, i) => {
	return { title: `${item}`, dataIndex: `string${i}`, key: `c1key${i}` };
});

// 列配置
const columns2 = [
	"序号",
	"样品状态",
	"检测编号",
	"样品名称",
	"检测标准号",
	"检测项",
	"检测班组",
	"分配人",
	"分配时间",
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
