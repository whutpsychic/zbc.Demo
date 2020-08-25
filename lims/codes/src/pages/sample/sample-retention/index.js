import React, { Fragment } from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumb from "../../../components/Breadcrumb";
import TopBar from "../../../components/TopBar";
import Button from "../../../components/Btns";
import Table from "../../../components/Table";

import dao from "./dao";

const { TopBarLeft, TopBarRight } = TopBar;
const { Select, Input, DatePicker } = TopBar;

// 列配置
const columns = [
	"序号",
	"样品状态",
	"留样日期",
	"样品批号",
	"检测编号",
	"样品名称",
	"样品原号",
	"样品条码",
	"样品仓库",
	"库位",
	"有效期",
	"还样人",
	"还样时间",
	"还样重量",
	"留样人",
	"处置方式",
	"处置人",
	"处置时间",
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
				<PageTitle title="留样管理" />
				<Breadcrumb />
				<div className="page-container">
					<TopBar>
						<TopBarLeft ref="conditions">
							<DatePicker label={"留样日期"} field="string5" />
							<Select label={"样品状态"} field="string0" />
							<Input label={"样品名称"} field="string1" />
							<Input label={"样品批号"} field="string2" />
							<Select label={"库位"} field="string3" />
							<Input label={"留样人"} field="string4" />
						</TopBarLeft>
						<TopBarRight>
							<Button
								type="query"
								num={1}
								text="查询"
								onClick={this.onClickQuery}
							/>
							<Button type="add" num={2} text="新增" />
							<Button type="edit" num={4} text="扫码留样" />
							<Button type="confirm" num={5} text="留样确认" />
							<Button type="edit" num={6} text="编辑" />
							<Button type="cancel" num={7} text="取消" />
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
