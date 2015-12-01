import React from 'react';
import NavbarCollapse from './NavbarCollapse.js';
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({
  render() {
    return(
      <div className="navbar navbar-default navbar-fixed-top yamm" role="navigation" id="navbar">
          <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand home" href="index.html">
                    <img src={"img/"} alt="logo" className="hidden-xs hidden-sm" />
                    <img src={"img/logo-small.png"} alt="logo" className="visible-xs visible-sm" />
                    <span className="sr-only">Homepage</span>
                </a>
                <NavbarCollapse />
            </div>
          </div>
      </div>
    );
  }
});

export default Navbar;
