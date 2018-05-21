
var leftmenuCN = [

	{
		name: "quality",
		text:"质量管理",
		children: [
			{ name: "query", text: "质量查询" },
			{ name: "analyze", text: "质量统计分析" },
			{ name: "standard", text: "质量标准" },
			{ name: "score", text: "质量评价" }
		]
	},
	{
		name: "plan",
		text: "生产计划",
		children: [
			{
				name: "query", text: "计划查询",
			},
			{
				name: "edit", text: "计划编制", children: [
					{ name: "year", text: "年计划" },
					{ name: "month", text: "月计划" },
					{ name: "date", text: "日计划" }
				]
			},
			{
				name: "monitor", text: "计划跟踪监控",
			},
		]
	},


];








export default leftmenuCN;