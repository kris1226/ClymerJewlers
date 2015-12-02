import { dispatch } from '../dispatcher/AppDispatcher';
import actionTypes from '../constants/actionTypes';
import imageApi from '../api/imageApi';

let initializeActions = {
  initApp: function() {
    dispatch({
      type: actionTypes.REQUEST_IMAGES,
      initialData: {
        images: imageApi.getImages()
      }
    });
  }
};

module.exports = initializeActions;
