import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './assets/stylesheets/styles.scss';

if (process.env.NODE_ENV !== 'production') {
  const Axe = require('react-axe'); // eslint-disable-line global-require
  Axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById('app'));
