
import React, { Component } from 'react';

import { Roof } from './layout';
import { Header } from './layout';

import Routes from './layout/Routes.js';

class App extends Component {

	render() {
		return (
			<div>
				<Roof />
				<Header />
				<div className="UI">
					<Routes />
				</div>
			</div>
				)
	}

}


export default App;
