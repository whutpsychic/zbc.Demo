
import React, { Component } from 'react';
import './app.css';
import { connect } from 'react-redux';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import Main from './main';

import Navigator from './navigator.js';

import message from 'antd/lib/message';
import 'antd/lib/message/style/index.css';

//设置语言locale
 import moment from 'moment';
 import 'moment/locale/zh-cn';
 moment.locale('zh-cn');


class App extends Component {
	//<Redirect from="/" to="/" />
	render() {
		return (
			<Router>
				<div className="app">
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/main" component={Main} />
						
					</Switch>
				</div>
			</Router>
			)
	}

	componentWillMount() {

	}

	componentDidMount() {

		message.warning('本应用不支持IE 11以下的浏览器！');

		Navigator.go((v) => {
			message.info('您正在使用的是 ' + v + ' 浏览器');
		})

		message.config({
			duration: 4
		})
	}

}

//const mapStateToProps = (state) => {

//	return {
//	};
//}

const mapDispatchToProps = (disptch) => {

	return {
	
	};
}

export default connect(null, mapDispatchToProps)(App);
