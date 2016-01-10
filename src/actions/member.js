import {createAction}   from 'redux-actions';
import {ActionTypes}    from '../constants';
import {api, parseJSON} from '../api';

export const getMember = createAction(ActionTypes.MEMBER_GET, () => (
  {
    ...JSON.parse(localStorage.getItem('auth'))
  }
));

export const createMember = createAction(ActionTypes.MEMBER_CREATE, (data) => {
  localStorage.setItem('auth', JSON.stringify({
    authorized: true,
    user: {
      email_address: data.email
    }
  }));
  let stores = [];

  for (let key of Object.keys(data.shops)) {
    if (data.shops[key]) stores.push(key);
  }

  return api('/create_user', {
    method: 'POST',
    body: JSON.stringify({
      name: data.name,
      email_address: data.email,
      stores
    })
  })
    .then(parseJSON)
    .then(res => (
      res
    ));
});

export const login = createAction(ActionTypes.LOGIN, email => (
  api('/auth', {
    method: 'POST',
    body: JSON.stringify({
      email_address: email
    })
  })
  .then(parseJSON)
  .then(res =>
    res
  )
));
