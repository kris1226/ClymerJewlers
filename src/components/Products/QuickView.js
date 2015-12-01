import React from 'react'

const QuickView = React.createClass({
  render () {
    return (
      <div className="quick-view-button">
        <a href="#" data-toggle="modal" data-target="#product-quick-view-modal"
        className="btn btn-default btn-sm">Quick view</a>
      </div>
    );
  }
});

export default QuickView;
