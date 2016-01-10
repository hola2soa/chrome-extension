import {handleActions} from 'redux-actions';

import {ActionTypes}   from '../constants';

export default handleActions({
  [ActionTypes.MEMBER_GET]: (state, action) => {
    if (!action.payload || action.error) return state;

    return action.payload;
  },

  [ActionTypes.MEMBER_CREATE]: (state, action) => {
    return state;
  },

  [ActionTypes.LOGIN]: {
    next(state, action) {
      console.log('success');
      localStorage.setItem('auth', JSON.stringify(action.payload));
      return state;
    },

    throw(state) {
      console.log('fail');
      return state;
    }
  }

}, {});
