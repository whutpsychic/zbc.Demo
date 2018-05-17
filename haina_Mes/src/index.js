
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import store from './store.js';
import { Provider} from 'react-redux';

//ReactDOM.render(
//		<App></App>,
//	document.getElementById('app')
//);

ReactDOM.render(
	<Provider store={store}>
		<App></App>
	</Provider>,
	document.getElementById('app')
);