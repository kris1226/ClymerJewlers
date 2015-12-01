import React from 'react';
import Product from './Product.js';
import { Router, Route, Link } from 'react-router';


const ProductList = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },
  render() {
    let images = this.props.items.map(function(item) {
      return(
        <Product key={item.key}
                 id={item.id}
                 src={item.src}
                 description={item.description}
                 price={item.price}/>
      );
    });

    if(!images.length) {
      image = <p>Loading images..</p>
    }
    return (
      <div className="row Product">
            {images}
      </div>
    );
  }
});
export default ProductList;
