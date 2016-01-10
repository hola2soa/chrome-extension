import {combineReducers}        from 'redux';
import {routeReducer}           from 'redux-simple-router';
import {reducer as formReducer} from 'redux-form';

import queenshop from './queenshop';
import member    from './member';
import pin       from './pin';

export default combineReducers({
  clothes: queenshop,
  member,
  pin,
  routing: routeReducer,
  form:    formReducer
});
