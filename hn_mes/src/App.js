
import React, { Component } from 'react';
import './app.css';
import { connect } from 'react-redux';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import Main from './main';

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
		//console.log(window.location.pathname);


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
