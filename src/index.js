import React from 'react';
import document from 'global/document';
import { Provider } from 'react-redux';
import { hashHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { render } from 'react-dom';

import App from './App';
//
// const Root = () => {
//   return (
//
//   )
// }
//   <App />
// );

render(<App />, document.getElementById('root'));
