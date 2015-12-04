import { combineReducers } from 'redux';
import { routeReducer }    from 'redux-simple-router';

import queenshop from './queenshop';

export default combineReducers({
  queenshop,
  routing: routeReducer
});
