import keyMirror from 'keymirror';

export const ActionTypes = keyMirror({
  FETCH_SHOP: null,
  FETCH_PART: null,
  CLEAN_SHOP: null,
  FETCH_PINNED: null,
  SEARCH: null,

  MEMBER_GET: null,
  MEMBER_CREATE: null,

  PIN_ITEM: null,
  UNPIN_ITEM: null,

  LOGIN: null
});

export const Shops = keyMirror({
  QUEENSHOP: null
});
