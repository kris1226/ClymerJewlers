'use strict';
import React from 'react';
import Images from './Images.js'

let Carousel = React.createClass({
  render() {
    return (
      <div id="slider" className="owl-carousel owl-theme">
        <Images />
      </div>
    );
  }
});

export default Carousel;
