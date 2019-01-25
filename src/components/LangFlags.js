import React from 'react';
import LangState from '../config/lang';

const LangFlags = () => (
  <div className="langContainer">
    <img
      className="langContFags"
      src="/static-files/rus-flag.png"
      onClick={LangState.setCurrentLang('ru')}
    />
    <img
      className="langContFags"
      src="/static-files/uk-flag.png"
      onClick={LangState.setCurrentLang('en')}
    />
  </div>
);

export default LangFlags;
