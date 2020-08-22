import React from "react";
import "./style.css";

import approval from "./approval.png";
import back from "./back.png";
import cancel from "./cancel.png";
import disable from "./disable.png";
import enable from "./enable.png";
import file from "./file.png";
import history from "./history.png";
import info from "./info.png";
import print from "./print.png";
import query from "./query.png";
import save from "./save.png";
import submit from "./submit.png";
import upload from "./upload.png";
import view from "./view.png";
import withdraw from "./withdraw.png";

// const disabledColor = "#d0d0d0";

// const colors = [
// 	{ normal: "#66a7fe", hover: "#579df8", active: "#197afa" },
// 	{ normal: "#39df70", hover: "#25dc61", active: "#01ba3d" },
// 	{ normal: "#fc7c6a", hover: "#fa6c57", active: "#f25138" },
// 	{ normal: "#d45fe6", hover: "#d150e4", active: "#bf28d6" },
// 	{ normal: "#ffbf32", hover: "#fab620", active: "#d18f00" },
// 	{ normal: "#a08bfd", hover: "#917afb", active: "#6847f1" },
// 	{ normal: "#4cccb8", hover: "#37cab3", active: "#00a58a" },
// 	{ normal: "#bad42e", hover: "#b4d215", active: "#8faa00" },
// 	{ normal: "#fda868", hover: "#fb9e56", active: "#f27f27" }
// ];

const getButtonByType = type => {
	switch (type) {
		// 审批
		case "approval":
			return approval;
		// 返回
		case "back":
			return back;
		// 取消
		case "cancel":
			return cancel;
		// 禁用
		case "disable":
			return disable;
		// 启用
		case "enable":
			return enable;
		// 文档
		case "file":
			return file;
		// 历史
		case "history":
			return history;
		// 信息
		case "info":
			return info;
		// 打印
		case "print":
			return print;
		// 查询
		case "query":
			return query;
		// 保存
		case "save":
			return save;
		// 提交
		case "submit":
			return submit;
		// 上传
		case "upload":
			return upload;
		// 浏览
		case "view":
			return view;
		// 撤回
		case "withdraw":
			return withdraw;
		default:
			return approval;
	}
};

// 按钮的运作模式：
// 按钮的前置图标是灵活规定的
// 按钮的颜色是按照顺序排列的，也就是说按钮的具体颜色不与文字做绑定关系
class Button extends React.Component {
	render() {
		const { onClick, type, num, text, disabled } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function" && !disabled) onClick();
				}}
			>
				<div
					className={
						disabled
							? `com-btn disabled`
							: num
							? `com-btn num${num}`
							: `com-btn`
					}
				>
					<img alt="btn" src={getButtonByType(type)} />
					<span>{text}</span>
				</div>
			</li>
		);
	}
}

export default Button;
