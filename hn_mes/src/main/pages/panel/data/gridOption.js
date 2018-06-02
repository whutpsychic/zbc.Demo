
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
		"string5"
	],

	columns: [
		//{
		//	title: "操作",
		//	//render: function (x) {
		//	//	return "<a click='look'>xxxxxx</a>"
		//	//}
		//},
		{
			title: "监控项目",
			name: "string1",
		},
		{
			title: "报警级别",
			name: "string2",
		},
		{
			title: "所属区域",
			name: "string3",
		}
	]

};



export default gridOption;