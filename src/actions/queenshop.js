import {createAction}   from 'redux-actions'
import {ActionTypes}    from '../constants'
import {api, parseJSON} from '../api'

export const fetchQueenshopHot = createAction(ActionTypes.FETCH_QUEENSHOP_HOT, () => (
  api('queenshop/1')
    .then(parseJSON)
    .then(res => (
      res
    ))
))
