import {handleActions} from 'redux-actions'
import {ActionTypes}   from '../constants'

const initialState = []

export default handleActions({
	[ActionTypes.FETCH_QUEENSHOP_HOT]: (state, action) => {
		return state
	}
}, initialState)
