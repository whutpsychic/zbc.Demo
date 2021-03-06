import React, { Fragment } from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumb from "../../../components/Breadcrumb";
import TopBar from "../../../components/TopBar";
import Button from "../../../components/Btns";
import Table from "../../../components/Table";

import dao from "./dao";

const { TopBarLeft, TopBarRight } = TopBar;
const { Select, Input, DateRange } = TopBar;

// 列配置
const columns = [
	"序号",
	"状态",
	"类别",
	"名称",
	"编号",
	"出厂编号",
	"规格",
	"单位",
	"介质",
	"标准号",
	"标准值",
	"标准单位",
	"定值日期",
	"有效期至",
	"生产厂家",
	"入库时间",
	"入库人",
	"领用人",
	"领用班组",
	"领用时间",
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
				<PageTitle title="标准物质台账" />
				<Breadcrumb />
				<div className="page-container">
					<TopBar>
						<TopBarLeft ref="conditions">
							<DateRange label={"入库时间"} field="string0" />
							<Select label={"状态"} field="string1" />
							<Input label={"名称"} field="string2" />
							<Input label={"编号"} field="string3" />
							<Input label={"标准号"} field="string4" />
						</TopBarLeft>
						<TopBarRight>
							<Button
								type="query"
								num={1}
								text="查询"
								onClick={this.onClickQuery}
							/>
							<Button type="add" num={2} text="新增入库" />
							<Button type="edit" num={3} text="取消入库" />
							<Button type="delete" num={4} text="删除" />
							<Button type="delete" num={5} text="出库确认" />
							<Button type="delete" num={6} text="取消出库" />
							<Button type="delete" num={7} text="导出" />
							<Button type="delete" num={8} text="打印" />
						</TopBarRight>
					</TopBar>
					<Table
						ref="table"
						columns={columns}
						dataSource={dataSource}
						selectable
					/>
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
