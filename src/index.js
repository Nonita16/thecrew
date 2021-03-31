import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/index.css';
import App from '../src/routes/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const store = createStore(
	reducer, // Reducers
	{}, // 
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);


