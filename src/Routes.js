
import React, { PropTypes, Component } from'react';
import { Router, Route, Redirect } from 'react-router';
import ProductPage from './pages/ProductPage';
import Description from './components/Products/DescriptionPage'
import App from'./App';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import ProductsContainer from './components/ProductsContainer';

export default class Routes extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
          <Route component={App}>
            <Redirect from='/' to='/home' />
            <Route path='home' component={ProductsContainer} />
            <Route path='product' path='/product/:id' component={ProductPage} />
          </Route>

      </Router>
    );
  }
}
