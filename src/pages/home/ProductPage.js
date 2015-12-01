'use strict';

import React, { PropTypes } from 'react'

class ProductPage extends React.Component {
  constructor() {
    super();
  }
  
  getInitialState() {
    return {
      items: [
        {
            key: 1,
            id: 1,
            src:'img/DSC_3.jpg',
            description: 'Image 1',
            price: 100.00,
        },{
            key: 2,
            id: 2,
            src:'img/1.jpg',
            description: 'Image 2',
            price: 0,
        },{
           key: 3,
           id: 3,
           src:'img/4.jpg',
           description: 'Image 3',
           price: 0,
        },{
           key: 4,
           id: 4,
           src:'img/5.jpg',
           description: 'Image 4',
           price: 0,
        },{
           key: 5,
           id: 5,
           src:'img/bangle4.jpg',
           description: 'Image 5',
           price: 0,
        },{
           key: 6,
           id: 6,
           src:'img/EarRings6.jpg',
           description: 'Image 6',
           price: 0
        },{
           key: 7,
           id: 7,
           src:'img/earRing4.jpg',
           description: 'Image 7',
           price: 0
        },{
           key: 8,
           id: 8,
           src:'img/earRings2.jpg',
           description: 'Image 8',
           price: 0
       },{
          key: 9,
          id: 9,
          src:'img/earRinghoop.jpg',
          description: 'Image 9',
          price: 0
      },{
         key: 10,
         id: 10,
         src:'img/earring8.jpg',
         description: 'Image 10',
         price: 0
       }
      ]
    };
  }

  render () {

  }
}

export default ProductPage;
