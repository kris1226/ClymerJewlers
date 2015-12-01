
'use strict';
import React, { PropTypes } from 'react';
import ProductsContainer from './components/ProductsContainer'
import DocumentTitle from 'react-document-title';
import NavigationBar from './components/common/NavigationBar';

const App = React.createClass({
  render() {
    return (
      <DocumentTitle title='Clymer Metal Crafts'>
        <div>
          <NavigationBar />
          <ProductsContainer />
          {this.props.children}
        </div>
      </DocumentTitle>
    );
  }
});

export default App;
