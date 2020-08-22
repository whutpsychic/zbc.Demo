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
				<PageTitle title="合同受理" />
				<Breadcrumb />
				<div className="page-container">
					<TopBar>
						<TopBarLeft ref="conditions">
							<Select label={"合同状态"} field="string0" />
							<Input label={"合同编号"} field="string1" />
							<Input label={"总样品名称"} field="string2" />
							<Select label={"受检单位"} field="string3" />
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
							<Button type="accept" num={6} text="受理" />
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
