/**
 * Created by z0035ujf on 10/27/2015.
 */
'use strict';

import React from 'react';
import { Route, DefaultRoute, RouteHandler, Link } from 'react-router';
import HomePage from '../pages/home/HomePage';
import NavigationBar from '../common/NavbarContainer';

let LoggedInRoute = React.creatClass({
    getRoutes: function() {
        return (
            <Route name="app" path="/" handler="LoggedInRouter">
                <DefaultRoute name="home" handler={HomePage}/>
            </Route>
        );
    },
    render() {
        return (
          <div>
            <div>
            <header>
                <ul>
                    <li><Link to="home">Home</li>
                </ul>
            </header>
            </div>

            <RouteHandler {...this.props} />
            </div>
          </div>
        );
    }
});
export default LandingPage;
