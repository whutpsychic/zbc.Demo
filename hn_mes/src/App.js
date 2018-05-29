
import React, { Component } from 'react';
import './app.css';
import { connect } from 'react-redux';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import Main from './main';

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
