import {handleActions} from 'redux-actions';
import _ from 'lodash';
import {ActionTypes}   from '../constants';

const initialState = [];

export default handleActions({
  [ActionTypes.PIN_ITEM]: {
    next(state, action) {
      const item = Object.assign({}, action.payload, {
        pinned: true
      });
      return [...state, item];
    },

    throw(state) {
      return state;
    }
  },

  [ActionTypes.UNPIN_ITEM]: {
    next(state, action) {
      const results = _.filter(state, function(item) {
        return item.title !== action.payload.title;
      });

      return results;
    },

    throw(state) {
      return state;
    }
  },

  [ActionTypes.FETCH_PINNED]: {
    next(state, action) {
      return action.payload.map(item => {
        return {
          ...item,
          pinned: true
        };
      });
    },

    throw(state) {
      return state;
    }
  }
}, initialState);
