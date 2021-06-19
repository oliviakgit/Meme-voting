import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'index.css';

import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.render(
	<ReduxProvider store={store}>
		<App />
	</ReduxProvider>,
	document.getElementById('root')
);
