/**
 * Created by z0035ujf on 10/21/2015.
 */
var React = require('react');
var PropTypes = React.PropTypes;
import { Router, Route, Link } from 'react-router';

const NavigationBar = React.createClass({
  render() {
    debugger;
    return (
      <div className="navbar navbar-default navbar-fixed-top yamm" role="navigation" id="navbar">
          <div className="container">
            <div className="navbar-header">
              <Link to="jewerlyStore" className="navbar-brand home">
                <img src={"img/"} alt="logo" className="visible-xs visible-sm" />
                <img src={"img/logo-small.png"} alt="logo" className="visible-xs visible-sm" />
              </Link>

              <ul className="nav navbar-nav">
                <li><Link to="jewerlyStore">Home</Link></li>
                <li><Link to="jewerlyStore">About</Link></li>
                <li><Link to="jewerlyStore">Contact</Link></li>
              </ul>
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }

});

module.exports = NavigationBar;
