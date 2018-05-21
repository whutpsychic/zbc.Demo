
import tool from '../../../../tool';

const DATA = {

	select1: [
		{ text: "职能部门" },
		{ text: "管理部门" },
		{ text: "坑爹部门" }
	],

	grid: [
		{ string1: "2017-011", string2: "91.20%", string3: "90.83%", string4: "94.21%", string5: "89.35%", string6: "89.35%", string7: "90.11%", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" },
		{ string1: "2017-012", string2: "91.20%", string3: "90.83%", string4: "94.21%", string5: "89.35%", string6: "89.35%", string7: "90.11%", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" },
		{ string1: "2017-013", string2: "91.20%", string3: "90.83%", string4: "94.21%", string5: "89.35%", string6: "89.35%", string7: "90.11%", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" },
		{ string1: "2017-014", string2: "91.20%", string3: "90.83%", string4: "94.21%", string5: "89.35%", string6: "89.35%", string7: "90.11%", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" },
		{ string1: "2017-015", string2: "91.20%", string3: "90.83%", string4: "94.21%", string5: "89.35%", string6: "89.35%", string7: "90.11%", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" },
		{ string1: "2017-016", string2: "91.20%", string3: "90.83%", string4: "94.21%", string5: "89.35%", string6: "89.35%", string7: "90.11%", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" },
		{ string1: "2017-017", string2: "91.20%", string3: "90.83%", string4: "94.21%", string5: "89.35%", string6: "89.35%", string7: "90.11%", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" },
		{ string1: "2017-018", string2: "91.20%", string3: "90.83%", string4: "94.21%", string5: "89.35%", string6: "89.35%", string7: "90.11%", string8: "隐藏字段1", string9: "隐藏字段2", string10: "隐藏字段3" }
	],

	getChartoption: () => {

		return tool.putOn.line1({
			legend: {
				data: [{ name: '总绩效', icon: 'rect' },
				{ name: '制造成本', icon: 'rect' },
				{ name: '产量', icon: 'rect' },
				{ name: '质量', icon: 'rect' },
				{ name: '安全环保', icon: 'rect' }
				],
				selected: {
					'总绩效': true,
					'制造成本': false,
					'产量': true,
					'质量': false,
					'安全环保': false,
				}
			},
			xAxis: [{
				type: 'category',
				data: tool.getConstantTimes({
					nums: 12,
					timeA: 2017,
					timeB: 1,
					linker: '-',
				})
			}],
			yAxis: [{
				type: 'value',
				//min: 60,
				//max: 100,
				axisLabel: {
					formatter: function (e) {
						return e + '%'
					}
				}
			}],
			series: [
				{
					type: 'line',
					name: '总绩效',
					data: tool.getRandomArr(12, 70, 100)
				}, {
					type: 'line',
					name: '制造成本',
					data: tool.getRandomArr(12, 38, 42)
				}, {
					type: 'line',
					name: '产量',
					data: tool.getRandomArr(12, 18.5, 21.5)
				}, {
					type: 'line',
					name: '质量',
					data: tool.getRandomArr(12, 9.5, 10.5)
				},
				{
					type: 'line',
					name: '安全环保',
					data: tool.getRandomArr(12, 4.5, 5.5)
				}]
		})
	}

};


export default DATA;