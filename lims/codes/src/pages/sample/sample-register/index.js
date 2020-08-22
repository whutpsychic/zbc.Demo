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
				<PageTitle title="样品登记" />
				<Breadcrumb />
				<div className="page-container">
					<TopBar>
						<TopBarLeft ref="conditions">
							<DateRange label={"选择日期"} field="string0" />
							<Select
								label={"状态"}
								field="string1"
								data={[
									{ label: "状态1", value: "state1" },
									{ label: "状态2", value: "state2" },
									{ label: "状态3", value: "state3" }
								]}
							/>
							<Input label={"样品名称"} field="string2" />
							<Input label={"样品编号"} field="string3" />
							<Input label={"样品批号"} field="string4" />
							<Input label={"检测编号"} field="string5" />
							<Select
								label={"送样单位"}
								field="string6"
								data={[
									{ label: "单位1", value: "unit1" },
									{ label: "单位2", value: "unit2" },
									{ label: "单位3", value: "unit3" }
								]}
							/>
						</TopBarLeft>
						<TopBarRight>
							<Button
								type="query"
								num={1}
								text="查询"
								onClick={this.onClickQuery}
							/>
							<Button type="edit" num={2} text="编辑" />
							<Button type="scanjy" num={3} text="扫码接样" />
							<Button type="jyconfirm" num={4} text="接样确认" />
							<Button type="cancel" num={5} text="取消" />
							<Button type="myjy" num={6} text="盲样接样" />
							<Button type="back" num={7} text="退回" />
							<Button type="print" num={8} text="打印" />
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