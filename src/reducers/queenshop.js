import {handleActions} from 'redux-actions'
import {ActionTypes}   from '../constants'

const initialState = []

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
