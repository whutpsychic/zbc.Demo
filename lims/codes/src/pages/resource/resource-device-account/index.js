import React, { Fragment } from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumb from "../../../components/Breadcrumb";
import TopBar from "../../../components/TopBar";
import Button from "../../../components/Btns";
import Table from "../../../components/Table";

import dao from "./dao";

const { TopBarLeft, TopBarRight } = TopBar;
const { Select, Input } = TopBar;

// 列配置
const columns = [
	"序号",
	"设备类型",
	"设备名称",
	"规格型号",
	"设备编码",
	"出厂编号",
	"设备条码",
	"存放地点",
	"责任人",
	"检定周期",
	"检定/校准日期",
	"检定/校准证书编号",
	"有效期至",
	"检定单位",
	"厂家",
	"联系电话",
	"设备状态",
	"购入日期",
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
				<PageTitle title="设备台账" />
				<Breadcrumb />
				<div className="page-container">
					<TopBar>
						<TopBarLeft ref="conditions">
							<Select label={"设备类型"} field="string0" />
							<Input label={"设备名称"} field="string1" />
							<Input label={"设备编码"} field="string2" />
							<Input label={"规格型号"} field="string3" />
							<Input label={"责任人"} field="string4" />
						</TopBarLeft>
						<TopBarRight>
							<Button
								type="query"
								num={1}
								text="查询"
								onClick={this.onClickQuery}
							/>
							<Button type="add" num={2} text="新增" />
							<Button type="edit" num={4} text="编辑" />
							<Button type="delete" num={5} text="删除" />
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
