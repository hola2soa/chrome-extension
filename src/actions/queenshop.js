import {createAction}   from 'redux-actions';
import {ActionTypes}    from '../constants';
import {api, parseJSON} from '../api';

export const fetchShop = createAction(ActionTypes.FETCH_SHOP, (name) => (
  api('?store=' + name)
    .then(parseJSON)
    .then(res => (
      res
    ))
));

export const fetchPart = createAction(ActionTypes.FETCH_PART, (name, category) => (
  api('?store=' + name + '&category=' + category)
    .then(parseJSON)
    .then(res => (
      res
    ))
));

export const cleanShop = createAction(ActionTypes.CLEAN_SHOP, () => (null));

export const search = createAction(ActionTypes.SEARCH, (keyword, min, max) => (
  api('?store=queenshop&keyword=' + keyword + '&price=' + min + ',' + max)
  .then(parseJSON)
  .then(res => (
    res
  ))
));

export const pin = createAction(ActionTypes.PIN_ITEM, (data) => {
  return api('/pin_item', {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(parseJSON)
    .then(res => (
      data.item
    ));
});

export const unpin = createAction(ActionTypes.UNPIN_ITEM, (data) => (
  api('/unpin_item', {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(parseJSON)
    .then(res => (
      data.item
    ))
));

export const fetchPinned = createAction(ActionTypes.FETCH_PINNED, (data) => (
  api('/user_pinned_items', {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(parseJSON)
    .then(res => (
      res
    ))
));
