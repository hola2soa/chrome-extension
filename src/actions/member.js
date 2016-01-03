import {createAction}   from 'redux-actions';
import {ActionTypes}    from '../constants';

export const getMember = createAction(ActionTypes.MEMBER_GET, () => (
  {
    ...JSON.parse(localStorage.getItem('member'))
  }
));

export const createMember = createAction(ActionTypes.MEMBER_CREATE, (data) => (
  new Promise((resolve) => {
    localStorage.setItem('member', JSON.stringify(data));
    resolve(data);
  })
));
