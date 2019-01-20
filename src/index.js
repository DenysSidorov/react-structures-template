// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import a from './temp';

import './index.css';
import './test.scss';

const title = 'Minimal React Webpack Babel Setup';

const TestComp = () => <div className="title">{title}</div>;

ReactDOM.render(<TestComp />, document.getElementById('app'));

console.log(`A = ${a}`);
