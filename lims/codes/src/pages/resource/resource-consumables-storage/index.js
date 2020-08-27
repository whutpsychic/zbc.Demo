import React, { Fragment } from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumb from "../../../components/Breadcrumb";
import Table from "../../../components/Table";
import TopBar from "../../../components/TopBar";
import Button from "../../../components/Btns";

import dao from "./dao";

const { TopBarLeft, TopBarRight } = TopBar;
const { Select, Input } = TopBar;

// 列配置
const columns = [
	"序号",
	"物资类型",
	"物资名称",
	"物资编号",
	"规格型号",
	"条码",
	"数量",
	"单位",
	"备注"
].map((item, i) => {
	return { title: `${item}`, dataIndex: `string${i}`, key: `c1key${i}` };
});

// 列配置
const columns2 = [
	"序号",
	"入库时间",
	"库位",
	"库存量",
	"单位",
	"条码",
	"入库数量",
	"供应商",
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
				<PageTitle title="库存管理" />
				<Breadcrumb />
				<div className="page-container">
					<TopBar>
						<TopBarLeft ref="conditions">
							<Select
								label={"物资类型"}
								field="string1"
								data={[
									{ label: "类型1", value: "state1" },
									{ label: "类型2", value: "state2" },
									{ label: "类型3", value: "state3" }
								]}
							/>
							<Input label={"物资名称"} field="string2" />
							<Input label={"物资编号"} field="string3" />
							<Input label={"规格型号"} field="string4" />
						</TopBarLeft>
						<TopBarRight>
							<Button
								type="query"
								num={1}
								text="查询"
								onClick={this.onClickQuery}
							/>
							<Button type="edit" num={2} text="明细查询" />
							<Button type="scanjy" num={3} text="扫码查询" />
							<Button type="jyconfirm" num={4} text="出库确认" />
							<Button type="cancel" num={5} text="取消出库" />
							<Button type="myjy" num={6} text="导出" />
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
