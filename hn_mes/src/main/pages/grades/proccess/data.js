

const DATA = {

	select1: [
		{ text: "全厂" },
		{ text: "化工厂" },
		{ text: "2016/12/10 12:10厂" },
		{ text: "动力西厂" }
	],
	select2: [
		{ text: "全部车间" },
		{ text: "SPVC车间" },
		{ text: "氢氧化镁车间" },
		{ text: "氯化钾车间" },
		{ text: "EPVC车间" }
	],
	select3: [
		{ text: "蒸汽" },
		{ text: "电力" },
		{ text: "天然气" }
	],

	grid: [
		{ string1: "万涛1", string2: "2016/12/10 12:10", string3: "刘颖", string4: "2016/12/10 12:12", string5: "1天2小时", string6: "未审批", string7: "万涛提交单据，通知刘颖审批", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" },
		{ string1: "万涛2", string2: "2016/12/10 12:10", string3: "刘颖", string4: "2016/12/10 12:12", string5: "1天2小时", string6: "未审批", string7: "万涛提交单据，通知刘颖审批", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" },
		{ string1: "万涛3", string2: "2016/12/10 12:10", string3: "刘颖", string4: "2016/12/10 12:12", string5: "1天2小时", string6: "未审批", string7: "万涛提交单据，通知刘颖审批", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" },
		{ string1: "万涛4", string2: "2016/12/10 12:10", string3: "刘颖", string4: "2016/12/10 12:12", string5: "1天2小时", string6: "未审批", string7: "万涛提交单据，通知刘颖审批", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" },
		{ string1: "万涛5", string2: "2016/12/10 12:10", string3: "刘颖", string4: "2016/12/10 12:12", string5: "1天2小时", string6: "未审批", string7: "万涛提交单据，通知刘颖审批", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" }
	],

	getChartoption: () => {

		return {
			series: [{
				type: 'graph',
				layout: 'force',
				//coordinateSystem: 'cartesian2d',
				focusNodeAdjacency: true,
				legendHoverLink: true,
				hoverAnimation: true,
				symbolSize: 100,
				//layout: 50,
				//roam: true,
				symbol: "roundRect",
				label: {
					normal: {
						show: true,
					}
				},
				edgeSymbol: ['circle', 'arrow'],
				edgeSymbolSize: [4, 15],
				edgeLabel: {
					normal: {
						textStyle: {
							fontSize: 20
						}
					}
				},
				data: [
					{ name: 's', x: 0, y: 0 },
					{ name: '企业部-负责人', x: 30, y: 0 },
					{ name: '主管领导', x: 60, y: 0 },
					{ name: '下发通知执行', x: 90, y: 0 },
					{ name: '结束', x: 120, y: 0 }
				],
				links: [
					{ source: 's', target: '企业部-负责人', label: { normal: { formatter: function () { return 'fffff' } } } },
					{ source: '企业部-负责人', target: '主管领导' },
					{ source: '主管领导', target: '下发通知执行' },
					{ source: '下发通知执行', target: '结束' },
				],
				lineStyle: {
					normal: {
						opacity: 0.9,
						width: 2,
						curveness: 0,
						type: 'solid'
					}
				}
			}]
		}






	}

};


export default DATA;