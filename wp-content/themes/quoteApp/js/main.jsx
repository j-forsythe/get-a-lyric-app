import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import QuoteApp from './components/quote-app.jsx';


ReactDOM.render(<QuoteApp />, document.querySelector('#quotes'));
