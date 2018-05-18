
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
		{ text: "查看详情", fn: look}
	],

	columns: [
		{
			title: "操作",
			//render: function (x) {
			//	return "<a click='look'>xxxxxx</a>"
			//}
		},
		{
			title: "产品名称",
			name: "string1",
		},
		{
			title: "所属分厂",
			name: "string2",
		},
		{
			title: "计量单位",
			name: "string3",
		},
		{
			title: "日产量",
			name: "string4",
		},
		{
			title: "月累计",
			name: "string5",
		},
		{
			title: "完成月计划（%）",
			name: "string6",
		},
		{
			title: "库存",
			name: "string7",
		}

	]

};



export default gridOption;