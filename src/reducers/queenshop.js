import {handleActions} from 'redux-actions';
import {OrderedMap}    from 'immutable';

import {ActionTypes}   from '../constants';

const initialState = {
  store: OrderedMap()
};

export default handleActions({
  [ActionTypes.FETCH_QUEENSHOP_HOT]: {
    next(state, action) {

      return {
        ...state,
        store: state.store.withMutations(map => {
          action.payload.forEach((item, index) => {
            map.set(index, item);
          });
        })
      };
    },

    throw(state) {
      return state;
    }
  }
}, initialState);
