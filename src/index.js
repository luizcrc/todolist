import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './main/app.jsx';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('app'));

registerServiceWorker();
