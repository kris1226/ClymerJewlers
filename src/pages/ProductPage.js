'use strict';
import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title';

class ProductPage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="content">
      <div class="box" id="details">
        <h4>Product details</h4>
        <p>details</p>
      </div>
    </div>
    );

  }
}

export default ProductPage;
