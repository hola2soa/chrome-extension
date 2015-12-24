import {combineReducers}        from 'redux';
import {routeReducer}           from 'redux-simple-router';
import {reducer as formReducer} from 'redux-form';

import queenshop from './queenshop';
import member    from './member';

export default combineReducers({
  queenshop,
  member,
  routing: routeReducer,
  form:    formReducer
});
