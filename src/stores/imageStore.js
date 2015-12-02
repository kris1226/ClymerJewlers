import { register } from '../dispatcher/AppDispatcher';
import actionTypes from '../constants/actionTypes';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import lodash from 'lodash';

let CHANGE_EVENT = 'change';

let _images = [];

let imageStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {

  },
  removeChangeListener(callback) {

  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  getImages() {
    return _images;
  }
});

register((action) => {
  let value = actionTypes.REQUEST_IMAGES;
  switch(action.type.type) {
    case actionTypes.REQUEST_IMAGES: _images = action.type.initialData.images.items;
      imageStore.emitChange();
      break;
  default:
  }
});

module.exports = imageStore;
