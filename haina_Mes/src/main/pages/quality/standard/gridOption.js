
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
		{ text: "查看", fn: look},
		{ text: "打印", fn: look},
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
			title: "检验产品",
			name: "string1",
		},
		{
			title: "产品牌号",
			name: "string2",
		},
		{
			title: "编制日期",
			name: "string3",
		},
		{
			title: "编制人",
			name: "string4",
		},
		{
			title: "审核日期",
			name: "string5",
		},
		{
			title: "审核人",
			name: "string6",
		},
		{
			title: "状态",
			name: "string7",
		}

	]

};



export default gridOption;