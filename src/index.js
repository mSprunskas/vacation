import '@babel/polyfill';
import 'raf/polyfill';
import 'classlist.js';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot && module.hot.accept();
