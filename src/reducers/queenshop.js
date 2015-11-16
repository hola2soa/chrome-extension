import {handleActions} from 'redux-actions'
import {OrderedMap}    from 'immutable'

import {ActionTypes} from '../constants'

const initialState = OrderedMap()

export default handleActions({
	[ActionTypes.FETCH_QUEENSHOP_HOT]: {
		next(state, action) {
			return state
		},

		throw(state, action) {
			console.log(action)
			return state;
		}
	}
}, initialState)
