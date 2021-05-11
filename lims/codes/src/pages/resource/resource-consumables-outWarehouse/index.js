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
const colString =
	"序号	出库日期	物资类型	物资编号	物资名称	规格型号	条码	出库数量	单位	库位码	领用部门	领用人	出库人";

const columns = colString.split("	").map((item, i) => {
	return { title: `${item}`, dataIndex: `string${i}`, key: `c1key${i}` };
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
				<PageTitle title="出库管理" />
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
				</div>
			</Fragment>
		);
	}
}

export default Default;