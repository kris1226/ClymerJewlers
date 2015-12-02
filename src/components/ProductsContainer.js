import React from 'react';
import ProductList from './Products/ProductList';
//import imagesActions from '../../actions/imagesActions';
import imageStore from '../stores/imageStore';

const ProductsContainer  = React.createClass({
  getInitialState() {
    debugger;
    return {
      items: imageStore.getImages()
    };
  },
  render () {
    return (
      <div id="content">
          <div className="container">
            <div className="col-sm-12">
              <div className="box text-center">
                <h3 className="text-uppercase">Items</h3>
                <h4 className="text-muted">
                  <span className="accesnt">Description</span>
                </h4>
              </div>
              <ProductList items={this.state.items} />
            </div>
          </div>
      </div>
    );
  }
});

export default ProductsContainer;
