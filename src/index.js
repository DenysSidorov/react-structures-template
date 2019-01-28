// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index';

const container = document.getElementById('app');
if (container) {
  ReactDOM.render(<App />, container, (a1, a2) => {
    console.log('Mounted', a1, a2);
  });
}

console.log(process.env.NODE_ENV, 'MODE IN REACT');
