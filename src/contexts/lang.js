// import React from 'react';
import {createContext} from 'react';
// import langs from '../config/lang';

const LangContext = createContext({});

export const LangProvider = LangContext.Provider;
export const LangConsumer = LangContext.Consumer;
