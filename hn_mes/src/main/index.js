
import React, { Component } from 'react';

import { Roof } from './layout';
import { Header } from './layout';
import { Tips } from './layout';
import { Footer } from './layout';

import Routes from './layout/Routes.js';

class App extends Component {

	render() {
		return (
			<div>
				<Roof />
				<Tips />
				<Header />
				<div className="UI">
					<Routes />
				</div>
				<Footer />
			</div>
				)
	}

}


export default App;
