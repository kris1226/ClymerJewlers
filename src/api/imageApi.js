
 import images from './imageData';
 import lodash from 'lodash';

let clone = function(item) {
  //return cloned copy so that the item is passed by value instead of by reference
  return JSON.parse(JSON.stringify(item));
};

 let imageApi = {
   getImages() {
     return clone(images);
   }
 };

 module.exports = imageApi;
