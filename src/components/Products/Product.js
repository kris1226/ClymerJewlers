'use strict';
import React from 'react';
import ProdcutDetails from './ProdcutDetails.js';

const Product = React.createClass({
  getInitialState: function() {
    return {
      query: ''
    }
  },
  queryChange: function(evt) {
    debugger;
    this.setState({
      query: evt.target.value
    });
  },
  handleSearch: function() {
    debugger;
    console.log('product clicked');
    window.location =  /product/ + this.props.id;
  },
  render: function() {
    const imageSize = {
      height: 250,
      width: 250
    };
    return (
      <div>
        <div className="col-md-3 col-sm-4">
          <div className="product">
            <div className="image" style={imageSize}>
            <img onClick={this.handleSearch} src={this.props.src} alt className="img-responsive image1" />
            </div>
            <ProdcutDetails key={this.props.id}
                            ref={this.props.id}
                            price={this.props.price}
                            description={this.props.description}/>
          </div>
        </div>
    </div>
    );
  }
});

module.exports = Product;
