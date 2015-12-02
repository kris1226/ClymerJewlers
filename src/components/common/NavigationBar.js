/**
 * Created by z0035ujf on 10/21/2015.
 */
var React = require('react');
var PropTypes = React.PropTypes;
import { Router, Route, Link } from 'react-router';

const NavigationBar = React.createClass({
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top yamm" role="navigation" id="navbar">
          <div className="container">
            <div className="navbar-header">
              <Link to="jewerlyStore" className="navbar-brand home">
                <img src={"img/"} alt="logo" className="visible-xs visible-sm" />
                <img src={"img/logo-small.png"} alt="logo" className="visible-xs visible-sm" />
              </Link>

              <ul className="nav navbar-nav">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="app">About</Link></li>
                <li><Link to="app">Contact</Link></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }

});

module.exports = NavigationBar;
