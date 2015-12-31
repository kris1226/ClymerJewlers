'use strict';

// file is mocking a web API by hitting har coded data.
import images from './imagesData'.images;
import lodash from 'lodash';

let _generateId = function(image) {
  return image.id;
};

let _clone = function(item) {
  //return cloned copy so that the item is passed by value instead of by reference
  return JSON.parse(JSON.stringify(item));
};

let ImageApi = {
  getImages: function() {
    return _clone(images);
  }
};
