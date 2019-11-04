import dljz_banner from "./img/dljz_banner.png";
import jieshui_banner from "./img/jieshui_banner.png";
import khcs_banner from "./img/khcs_banner.jpg";
import new_high from "./img/new-high.jpg";
import new_transfer from "./img/new-transfer.jpg";

import inav1_819 from "./img/inav1-819.jpg";
import inav1 from "./img/inav1.png";
import inav2 from "./img/inav2.png";
import inav2_819 from "./img/inav2-819.jpg";
import inav3_819 from "./img/inav3-819.jpg";
import inav4 from "./img/inav4.png";
import inav6 from "./img/inav6.png";

const data = {};

//走马灯图片数组
data.carouselArr = [
	dljz_banner,
	jieshui_banner,
	khcs_banner,
	new_high,
	new_transfer
];

//左侧目录数组
data.leftMenu = [
	"注册公司",
	"财税记账",
	"商标知产",
	"高新资质",
	"社保人事",
	"专业律师"
];

//menu数据
data.MenuData = [
	{
		menu: [
			{
				title: "公司注册",
				items: [
					{ text: "公司注册", active: true },
					{ text: "注册地址" },
					{ text: "地址续费" },
					{ text: "银行开户" },
					{ text: "税收优惠公司注册" },
					{ text: "海外公司注册", active: true }
				]
			},
			{
				title: "公司变更",
				items: [
					{ text: "公司名称变更" },
					{ text: "法人、高管或注册资本变更", active: true },
					{ text: "股权变更" },
					{ text: "注册地址变更" },
					{ text: "经营范围变更" },
					{ text: "公司章证遗失补办" },
					{ text: "海外公司变更", active: true }
				]
			},
			{
				title: "注销及其他",
				items: [
					{ text: "工商解异常", active: true },
					{ text: "公司注销" },
					{ text: "年报公示" },
					{ text: "五证合一" }
				]
			}
		],
		steps: [inav1, inav2, inav4]
	},
	{
		menu: [
			{
				title: "代理记账",
				items: [
					{ text: "小规模代理记账", active: true },
					{ text: "一般纳税人代理记账" }
				]
			},
			{
				title: "专家代理记账",
				items: [
					{ text: "高新企业代理记账" },
					{ text: "进出口企业代理记账", active: true },
					{ text: "专家上门记账" },
					{ text: "税务咨询" }
				]
			},
			{
				title: "特殊行业代账",
				items: [
					{ text: "民间非营利组织记账", active: true },
					{ text: "外商投资企业记账" },
					{ text: "互联网电商企业记账" },
					{ text: "旅游行业记账" },
					{ text: "劳务派遣行业记账" },
					{ text: "人力资源行业记账" },
					{ text: "建筑行业记账" }
				]
			},
			{
				title: "税务代办",
				items: [
					{ text: "税控代办", active: true },
					{ text: "发票代办" },
					{ text: "办理一般纳税人资质" }
				]
			},
			{
				title: "审计评估",
				items: [
					{ text: "财务审计", active: true },
					{ text: "验资报告" },
					{ text: "资产评估" }
				]
			},
			{
				title: "税务周边",
				items: [{ text: "所得税汇算清缴", active: true }, { text: "税务解锁" }]
			}
		],
		steps: [inav1, inav2, inav4]
	},
	{
		menu: [
			{
				title: "商标注册",
				items: [
					{ text: "国内商标注册", active: true },
					{ text: "国际商标注册" },
					{ text: "购买商标" }
				]
			},
			{
				title: "商标工具",
				items: [
					{ text: "免费商标监控" },
					{ text: "免费商标查询", active: true },
					{ text: "智能商标查询报告" }
				]
			},
			{
				title: "商标案件",
				items: [
					{ text: "商标驳回复审", active: true },
					{ text: "商标异议" },
					{ text: "商标无效宣告" },
					{ text: "商标无效撒三" },
					{ text: "商标行政诉讼" }
				]
			},
			{
				title: "信息变更",
				items: [
					{ text: "商标变更", active: true },
					{ text: "商标转让" },
					{ text: "商标续展" },
					{ text: "商标宽展" },
					{ text: "商标注销" },
					{ text: "商标备案许可" },
					{ text: "商标设计" }
				]
			},
			{
				title: "版权服务",
				items: [
					{ text: "软件著作权", active: true },
					{ text: "文字美术著作权" },
					{ text: "视频著作权" }
				]
			},
			{
				title: "专利服务",
				items: [
					{ text: "发明专利（常规领域）", active: true },
					{ text: "发明（特殊领域）" },
					{ text: "实用新型专利" },
					{ text: "外观设计专利" },
					{ text: "PCT国际" },
					{ text: "专利周边" }
				]
			}
		],
		steps: [inav1, inav2, inav4]
	},
	{
		menu: [
			{
				title: "行政审批",
				items: [
					{ text: "互联网类", active: true },
					{ text: "游戏类", active: true },
					{ text: "餐饮类", active: true },
					{ text: "广播电视类", active: true },
					{ text: "通讯类", active: true },
					{ text: "人力资源类", active: true },
					{ text: "旅游类", active: true },
					{ text: "环境类型影响登记", active: true },
					{ text: "道路运输类", active: true },
					{ text: "营业演出类", active: true },
					{ text: "进出口类", active: true }
				]
			},
			{
				title: "高新认证",
				items: [
					{ text: "高新企业认证" },
					{ text: "中关村高新认证", active: true }
				]
			},
			{
				title: "管理体系认证",
				items: [
					{ text: "ISO 14001（环境管理体系）", active: true },
					{ text: "ISO 9001（质量管理体系）" },
					{ text: "ISO 27001（信息安全管理体系）" },
					{ text: "ISO 22000（食品安全管理体系）" },
					{ text: "ISO 20000（信息技术服务管理体系）" },
					{ text: "ISO 18001（职业健康安全管理体系）" }
				]
			}
		],
		steps: [inav1, inav2, inav4]
	},
	{
		menu: [
			{
				title: "企业社保",
				items: [
					{ text: "社保开户", active: true },
					{ text: "公积金开户", active: true },
					{ text: "社保账户托管（企业）", active: true },
					{ text: "社保/公积金账户注销", active: true },
					{ text: "周边服务", active: true },
					{ text: "优惠套餐", active: true }
				]
			},
			{
				title: "个人社保",
				items: [
					{ text: "代缴社保公积金（个人）" },
					{ text: "补缴社保公积金（个人）", active: true },
					{ text: "社保待遇申领" },
					{ text: "公积金提取" },
					{ text: "周边服务" }
				]
			},
			{
				title: "工作居住证",
				items: [
					{ text: "企业《工作居住证》开户", active: true },
					{ text: "员工《工作居住证》申办" },
					{ text: "《工作居住证》维护管理" },
					{ text: "企业《工作居住证》年检" },
					{ text: "《工作居住证》随迁" },
					{ text: "《工作居住证》续签" }
				]
			},
			{
				title: "残保金",
				items: [{ text: "残保减免方案", active: true }]
			}
		],
		steps: [inav1, inav2, inav4]
	},
	{
		menu: [
			{
				title: "法律咨询",
				items: [
					{ text: "电话问律师", active: true },
					{ text: "见面问律师" },
					{ text: "法律会员" }
				]
			},
			{
				title: "合同文书",
				items: [
					{ text: "合同代写、审核" },
					{ text: "股权类合同", active: true },
					{ text: "投资类合同" },
					{ text: "劳动类合同" },
					{ text: "律师函" },
					{ text: "公司章程" }
				]
			},
			{
				title: "法律顾问",
				items: [
					{ text: "创业法律顾问", active: true },
					{ text: "融资专项法律顾问" },
					{ text: "劳动人事专项法律顾问" },
					{ text: "创业法律顾问【升级版】" }
				]
			},
			{
				title: "专项服务",
				items: [
					{ text: "股权方案设计", active: true },
					{ text: "尽职调查", active: true },
					{ text: "代理诉讼", active: true },
					{ text: "个人法律服务", active: true },
					{ text: "股权激励方案", active: true },
					{ text: "劳动仲裁", active: true },
					{ text: "法律套餐", active: true }
				]
			}
		],
		steps: [inav1, inav2, inav4]
	}
];

export default data;
