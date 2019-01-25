// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index';

import LangState from './config/lang';

import {LangProvider} from './contexts/lang';

const container = document.getElementById('app');
if (container) {
  ReactDOM.render(
    <LangProvider value={LangState}>
      <App />
    </LangProvider>,
    container,
  );
}

console.log(process.env.NODE_ENV, 'MODE IN REACT');
