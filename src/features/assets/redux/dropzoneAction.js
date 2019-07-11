// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ASSETS_DROPZONE_ACTION,
} from './constants';

export function dropzoneAction() {
  return {
    type: ASSETS_DROPZONE_ACTION,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case ASSETS_DROPZONE_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
