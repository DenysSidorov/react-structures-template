// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index';

const container = document.getElementById('app');
if (container) {
  ReactDOM.render(<App />, container, () => {
    console.log('Application was mounted');
  });
}

console.log(process.env.NODE_ENV, 'MODE IN REACT');

/**
 * Plans:
 * - CSS in JS (in resume)
 * - React Router
 * - MobX
 * - CSS-GRIDS (in resume)
 * - Tests: Mocha, Jasmine, Jest, Events (in resume)
 * - TypeScript
 * */
