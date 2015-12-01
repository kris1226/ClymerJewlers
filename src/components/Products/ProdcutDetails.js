import React from 'react';
import Product from './Product';

var ProductDetails = React.createClass({
  render () {
    return (
      <div>
        <div className="text">
          <h3><a href="detail.html">{this.props.description}</a></h3>
          <p className="price">${this.props.price}</p>
        </div>
      </div>
    );
  }
});

export default ProductDetails;
