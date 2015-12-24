import {handleActions} from 'redux-actions';
import {OrderedMap}    from 'immutable';

import {ActionTypes}   from '../constants';

const initialState = {
  store: OrderedMap()
};

export default handleActions({
  [ActionTypes.MEMBER_GET]: (state, action) => {
    if (!action.payload || action.error) return state;

    return {
      store: action.payload
    };
  },

  [ActionTypes.MEMBER_CREATE]: (state, action) => {
    return state;
  }
}, {store: {}});
