import {handleActions} from 'redux-actions';

import {ActionTypes}   from '../constants';

export default handleActions({
  [ActionTypes.FETCH_SHOP]: {
    next(state, action) {

      return [...state, ...action.payload];
    },

    throw(state) {
      return state;
    }
  },

  [ActionTypes.FETCH_PART]: {
    next(state, action) {

      return [...state, ...action.payload];
    },

    throw(state) {
      return state;
    }
  },

  [ActionTypes.SEARCH]: {
    next(state, action) {

      return action.payload;
    },

    throw(state) {
      return state;
    }
  },

  [ActionTypes.CLEAN_SHOP]: (state, action) => {
    return [];
  }
}, []);
