
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Transition from 'react-addons-css-transition-group';
//import { CSSTransitionGroup }  from 'react-transition-group';

import './tips.css';

import { showTips } from './actions.js';

class Tips extends Component {

	render() {

		const { show, msg } = this.props;

		if (show) {
			return (
				<Transition
					transitionName="sertIn"
					transitionAppear={true}
					transitionAppearTimeout={2000}
					//transitionEnter={true}
					//transitionLeave={true}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					<p className="tips">{msg}</p>
				</Transition>
			)
		}

		return (
			<Transition
				transitionName="sertIn"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
			>
			</Transition>
		)
	}

	componentDidMount() {
		const { tipsShower } = this.props;

		setTimeout(() => { tipsShower(true) }, 2000);
		setTimeout(() => { tipsShower(false) }, 10000);
	}

}

const mapStateToProps = (state) => {
	//console.log(state)
	return {
		show: state.showTips,
		msg: "声明：根据保密协议，此demo并非实际软件，旨在展示效果，作者zbc享有最终解释权（不定时更新）"
	};
}

const mapDispatchToProps = (dispatch) => {

	return {
		tipsShower: (txt) => {
			dispatch(showTips(txt))
		}
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(Tips);