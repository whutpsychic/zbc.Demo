const DATA = {

	grid: [
		{ string1: "Atmospheric Tower", string2: "red", string3: "SPVC车间"},
		{ string1: "Atmospheric Tower", string2: "gary", string3: "SPVC车间"},
		{ string1: "Atmospheric Tower", string2: "green", string3: "SPVC车间"},
		{ string1: "Atmospheric Tower", string2: "red", string3: "SPVC车间"}
	],

	divs: [
		{
			title:"烧碱装置",
			bars: [
				{ title: "液碱", data: ["25万吨", "32万吨", "43万吨"] },
				{ title: "片碱", data: ["25万吨", "32万吨", "43万吨"] }
			],
			blocks: [
				{ label: "生产", data: 22, color: "red" },
				{ label: "物料平衡", data: 15, color: "yellow" },
				{ label: "重大危险源", data: 15, color: "green" }
			]
		},
		{
			title: "氢氧化镁装置",
			bars: [
				{ title: "Mg(OH)2 Ⅰ类", data: ["25万吨", "32万吨", "43万吨"] },
				{ title: "Mg(OH)2 Ⅱ类", data: ["25万吨", "32万吨", "43万吨"] }
			],
			blocks: [
				{ label: "生产", data: 22, color: "red" },
				{ label: "物料平衡", data: 15, color: "yellow" },
				{ label: "重大危险源", data: 15, color: "green" }
			]
		},
		{
			title: "氧化镁装置",
			bars: [
				{ title: "MgO Ⅰ类", data: ["25万吨", "32万吨", "43万吨"] },
				{ title: "MgO Ⅱ类", data: ["25万吨", "32万吨", "43万吨"] }
			],
			blocks: [
				{ label: "生产", data: 22, color: "red" },
				{ label: "物料平衡", data: 15, color: "yellow" },
				{ label: "重大危险源", data: 15, color: "green" }
			]
		},
		{
			title: "VCM装置",
			bars: [
				{ title: "VCM", data: ["25万吨", "32万吨", "43万吨"] }
			],
			blocks: [
				{ label: "生产", data: 22, color: "red" },
				{ label: "物料平衡", data: 15, color: "yellow" },
				{ label: "重大危险源", data: 15, color: "green" }
			]
		},
		{
			title: "PVC装置",
			bars: [
				{ title: "SPVC", data: ["25万吨", "32万吨", "43万吨"] },
				{ title: "EPVC", data: ["25万吨", "32万吨", "43万吨"] },
				{ title: "CPVC", data: ["25万吨", "32万吨", "43万吨"] }
			],
			blocks: [
				{ label: "生产", data: 22, color: "red" },
				{ label: "物料平衡", data: 15, color: "yellow" },
				{ label: "重大危险源", data: 15, color: "green" }
			]
		},
		{
			title: "乙炔发生装置",
			bars: [
				{ title: "VCM", data: ["25万吨", "32万吨", "43万吨"] },
				{ title: "片碱", data: ["25万吨", "32万吨", "43万吨"] }
			],
			blocks: [
				{ label: "生产", data: 22, color: "red" },
				{ label: "物料平衡", data: 15, color: "yellow" },
				{ label: "重大危险源", data: 15, color: "green" }
			]
		},
		{
			title: "电石炉",
			bars: [
				{ title: "VCM", data: ["25万吨", "32万吨", "43万吨"] },
				{ title: "VCM", data: ["25万吨", "32万吨", "43万吨"] },
				{ title: "VCM", data: ["25万吨", "32万吨", "43万吨"] }
			],
			blocks: [
				{ label: "生产", data: 22, color: "red" },
				{ label: "物料平衡", data: 15, color: "yellow" },
				{ label: "重大危险源", data: 15, color: "green" }
			]
		}
	]

};


export default DATA;