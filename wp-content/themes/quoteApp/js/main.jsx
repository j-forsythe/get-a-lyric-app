import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import QuoteApp from './components/quote-app.jsx';
import QuoteContent from './components/quote-content.jsx'


ReactDOM.render(<QuoteApp />, document.querySelector('#quotes'));
