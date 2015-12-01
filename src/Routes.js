'use strict';

import React, { PropTypes, Component } from'react';
import { Router, Route } from 'react-router';
import ProductPage from './pages/ProductPage';
import Description from './components/Products/DescriptionPage'
import App from'./App';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';

var ProductsContainer = require('./components/ProductsContainer.js');

var HomePage = require('./components/HomePage');

export default class Routes extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
          <Route name='app' path='/' component={App} />
          <Route name='product' path='/product/:id' component={ProductPage} />
          <Route name='user' path='/:login' component={HomePage} />
      </Router>
        );
    }
}
