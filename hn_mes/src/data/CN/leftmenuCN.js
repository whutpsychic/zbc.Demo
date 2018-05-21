
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
	{
		name: "energy",
		text: "能源管理",
		children: [
			{
				name: "monitor", text: "能源管网监控",
			},
			{
				name: "analyze", text: "能源统计分析",
				children: [
					{ name: "pie", text: "饼图分析"},
					{ name: "trend", text: "趋势图分析"}
				]
			}
		]
	},
	{
		name: "grades",
		text: "绩效管理",
		children: [
			{
				name: "analyze", text: "绩效分析",
			},
			{
				name: "proccess", text: "绩效流程"
			}
		]
	}
];








export default leftmenuCN;