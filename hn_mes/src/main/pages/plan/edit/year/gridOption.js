
var look = function (data) {
	//console.log('加载look函数')
	return function () {
		console.log(data)
	}
}

const gridOption = {

	fields: [
		"string1",
		"string2",
		"string3",
		"string4",
		"string5",
		"string6",
		"string7",
		"string8",
		"string9",
		"string10"
	],

	operations: [
		{ text: "编辑", fn: look},
		{ text: "删除", fn: look}
	],

	columns: [
		{
			title: "操作",
			//render: function (x) {
			//	return "<a click='look'>xxxxxx</a>"
			//}
		},
		{
			title: "名称",
			name: "string1",
		},
		{
			title: "车间",
			name: "string2",
		},
		{
			title: "产品名称",
			name: "string3",
		},
		{
			title: "单位",
			name: "string4",
		},
		{
			title: "产量计划",
			name: "string5",
		},
		{
			title: "销售计划",
			name: "string6",
		},
		{
			title: "审批状态",
			name: "string7",
		}

	]

};



export default gridOption;