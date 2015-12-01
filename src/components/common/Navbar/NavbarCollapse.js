import React from 'react';
import Links from './Links.js';

let NavbarCollapse = React.createClass({
  getInitialState() {
    return {
      navBarLinks: [{
            key: 1,
            id: 1,
            src:'index.html',
            text: 'Home',
       },{
            key: 2,
            id: 1,
            src:'index.html',
            text: 'Contact',
       }]
    };
  },
  render() {
    let self = this;
    let links = this.state.navBarLinks.map(function(l) {
      return(
        <Links key={l.key} ref={l.id} src={l.src} text={l.text} />
      );
    });

    if(!links.length) {
      links = <p>Loading..</p>
    }
    return (
        <div className="navbar-collapse collapse" id="navigation">
          <ul className="nav navbar-nav navbar-left">
            { links }
          </ul>
        </div>
      );
  }
});

export default NavbarCollapse;
