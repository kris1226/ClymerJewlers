import React from 'react';

let Links = React.createClass({
  render() {
    return (
       <li className="active dropdown normal-dropdown">
         <a href="index.html" className="dropdown-toggle" data-le="dropdown">
           {this.props.text}<b className="caret"></b>
         </a>
         <ul className="dropdown-menu">
         <li>
          <a href={this.props.src}></a>
            </li>
          </ul>
      </li>
    );
  }
});

export default Links;
