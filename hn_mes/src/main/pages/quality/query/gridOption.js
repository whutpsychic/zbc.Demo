
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
		{ text: "打印", fn: look}
	],

	columns: [
		{
			title: "操作",
			//render: function (x) {
			//	return "<a click='look'>xxxxxx</a>"
			//}
		},
		{
			title: "取样名称",
			name: "string1",
		},
		{
			title: "所属车间",
			name: "string2",
		},
		{
			title: "牌号",
			name: "string3",
		},
		{
			title: "取样地点",
			name: "string4",
		},
		{
			title: "批号",
			name: "string5",
		},
		{
			title: "检验人员",
			name: "string6",
		},
		{
			title: "检验结论",
			name: "string7",
		}

	]

};



export default gridOption;