import React, { Fragment } from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumb from "../../../components/Breadcrumb";
import TopBar from "../../../components/TopBar";
import Button from "../../../components/Btns";
import Table from "../../../components/Table";

import dao from "./dao";

const { TopBarLeft, TopBarRight } = TopBar;
const { Input, MonthPicker } = TopBar;

// // 列配置
// const columns = [
// 	"序号",
// 	"样品名称",
// 	"比对时间",
// 	"样品编号",
// 	"样品原号",
// 	"Cu原结果",
// 	"Cu检测结果",
// 	"Cu差值",
// 	"S原结果",
// 	"S检测结果",
// 	"S差值",
// 	"Fe原结果",
// 	"Fe检测结果",
// 	"Fe差值",
// 	"SiO2原结果",
// 	"SiO2检测结果",
// 	"SiO2差值",
// 	"CaO原结果",
// 	"CaO检测结果",
// 	"CaO差值",
// 	"MgO原结果",
// 	"MgO检测结果",
// 	"MgO差值",
// 	"备注"
// ].map((item, i) => {
// 	return { key: `key${i}`, title: `${item}`, dataIndex: `string${i}` };
// });

const columns = [
	"序号",
	"样品名称",
	"比对时间",
	"样品编号",
	"样品原号",
	"Cu",
	"S",
	"Fe",
	"SiO2",
	"CaO",
	"MgO",
	"备注"
].map((item, i) => {
	if (i > 4 && i < 11) {
		return {
			key: `key${i}`,
			title: `${item}`,
			dataIndex: `string${i}`,
			children: [
				{ key: `chkey${0}`, title: `原结果`, dataIndex: `string${i}` },
				{ key: `chkey${1}`, title: `检测结果`, dataIndex: `string${i}` },
				{ key: `chkey${2}`, title: `差值`, dataIndex: `string${i}` }
			]
		};
	}

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
				<PageTitle title="质检对比" />
				<Breadcrumb />
				<div className="page-container">
					<TopBar>
						<TopBarLeft ref="conditions">
							<MonthPicker label={"比对时间"} field="string0" />
							<Input label={"样品名称"} field="string1" />
							<Input label={"样品编号"} field="string2" />
							<Input label={"样品原号"} field="string2" />
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
