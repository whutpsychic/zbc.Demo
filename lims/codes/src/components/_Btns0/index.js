import React from "react";
import "./style.css";

//受理
class AcceptanceBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div className="com-btn twobytes acceptance" alt="acceptance" />
			</li>
		);
	}
}

//新增
class AddBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div className="com-btn fourbytes add" alt="add" />
			</li>
		);
	}
}

//退回
class BackBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div className="com-btn twobytes back" alt="back" />
			</li>
		);
	}
}

//取消
class CancelBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div className="com-btn twobytes cancel" alt="cancel" />
			</li>
		);
	}
}

//确认接收
class ConfirmReceiveBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div
					className="com-btn fourbytes confirm-receive"
					alt="confirm-receive"
				/>
			</li>
		);
	}
}

//删除
class DeleteBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div className="com-btn twobytes delete" alt="delete" />
			</li>
		);
	}
}

//编辑
class EditBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div className="com-btn twobytes edit" alt="edit" />
			</li>
		);
	}
}

//接样确认
class JYConfirmBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div className="com-btn fourbytes jy-confirm" alt="jy-confirm" />
			</li>
		);
	}
}

//盲样接样
class MYJYBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div className="com-btn fourbytes myjy" alt="myjy" />
			</li>
		);
	}
}

//打印
class PrintBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div className="com-btn twobytes print" alt="print" />
			</li>
		);
	}
}

//查询
class QueryBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div className="com-btn twobytes query" alt="query" />
			</li>
		);
	}
}

//扫描接样
class ScanJYBtn extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<li
				onClick={() => {
					if (typeof onClick === "function") onClick();
				}}
			>
				<div className="com-btn fourbytes scan-jy" alt="scan-jy" />
			</li>
		);
	}
}

export {
	AcceptanceBtn,
	AddBtn,
	BackBtn,
	CancelBtn,
	ConfirmReceiveBtn,
	DeleteBtn,
	EditBtn,
	JYConfirmBtn,
	MYJYBtn,
	PrintBtn,
	QueryBtn,
	ScanJYBtn
};
