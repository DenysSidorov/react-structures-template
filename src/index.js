// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/index';

ReactDOM.render(<App />, document.getElementById('app'));

const container = document.getElementById('app');

if (container) {
  ReactDOM.render(<App />, container);
}

console.log(process.env.NODE_ENV, 'MODE IN REACT');
