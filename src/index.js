import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './css/main.css';
import Router from './components/Router';
import store from './store/Store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root')
);
