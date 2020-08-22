import React from "react";
import "./style.css";
import { Input, Select, DateRange } from "../Conditions";

class TopBarLeft extends React.Component {
	childs = {};

	render() {
		const { props } = this;
		const _this = this;
		return (
			<ul className="left-conditions">
				{React.Children.map(props.children, child => {
					if (!child.getValue || typeof child.getValue !== "function") {
						return React.cloneElement(child, {
							//把父组件的props.name赋值给每个子组件
							onRef: ref => {
								_this.childs[child.props.field] = ref;
							}
						});
					} else return child;
				})}
			</ul>
		);
	}

	getConditions = () => {
		let obj = {};
		for (let i in this.childs) {
			obj[i] = this.childs[i].getValue();
		}
		return obj;
	};
}

class TopBarRight extends React.Component {
	render() {
		return <ul className="right-btns">{this.props.children}</ul>;
	}
}

class Default extends React.Component {
	state = {};
	render() {
		return <div className="conditions-container">{this.props.children}</div>;
	}
}

Default.TopBarLeft = TopBarLeft;
Default.TopBarRight = TopBarRight;
// ===================================================================
const itemWidth = 140;
const itemHeight = 32;
const dateRangeWidth = 356;
// ===================================================================
class TopBarInput extends React.Component {
	state = {};

	componentDidMount() {
		const { onRef } = this.props;
		if (typeof onRef === "function") onRef(this);
	}

	render() {
		const { label } = this.props;
		return (
			<li>
				{/*label ? <label>{label}</label> : null*/}
				<Input
					ref="input"
					placeholder={label}
					style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
					allowClear
				/>
			</li>
		);
	}

	getValue = () => {
		return this.refs.input.getValue();
	};
}

class TopBarSelect extends React.Component {
	componentDidMount() {
		const { onRef } = this.props;
		if (typeof onRef === "function") onRef(this);
	}
	render() {
		const { label, data = [] } = this.props;
		return (
			<li>
				{/*label ? <label>{label}</label> : null*/}
				<Select
					ref="select"
					data={data}
					placeholder={label}
					style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
				/>
			</li>
		);
	}
	getValue = () => {
		return this.refs.select.getValue();
	};
}

class TopBarDateRange extends React.Component {
	componentDidMount() {
		const { onRef } = this.props;
		if (typeof onRef === "function") onRef(this);
	}
	render() {
		// const { label } = this.props;
		return (
			<li className="date-range-li">
				{/*label ? <label>{label}</label> : null*/}
				<DateRange
					ref="date-range"
					style={{
						width: `${dateRangeWidth}px`,
						height: `${itemHeight}px`
					}}
				/>
			</li>
		);
	}
	getValue = () => {
		return this.refs["date-range"].getValue();
	};
}

Default.Input = TopBarInput;
Default.Select = TopBarSelect;
Default.DateRange = TopBarDateRange;

export default Default;
