import {createAction}   from 'redux-actions';
import {ActionTypes}    from '../constants';

export const getMember = createAction(ActionTypes.MEMBER_GET, () => (
  {
    name: localStorage.name
  }
));

export const createMember = createAction(ActionTypes.MEMBER_CREATE, (data) => (
  new Promise((resolve) => {
    localStorage.name = data.name;
    resolve(data);
  })
));
