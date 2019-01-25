// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index';

// import langs from './config/lang';

import LangContext from './contexts/lang';

const container = document.getElementById('app');

if (container) {
  ReactDOM.render(
    <LangContext.Provider>
      <App />
    </LangContext.Provider>,
    container,
  );
}

console.log(process.env.NODE_ENV, 'MODE IN REACT');
