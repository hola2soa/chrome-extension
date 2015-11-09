import {
	FETCH_QUEENSHOP_HOT,
	FETCH_QUEENSHOP_HOT_SUCCESS,
	FETCH_QUEENSHOP_HOT_FAIL
} from '../constants'

const initialState = [];

export default function queenshop(state = initialState, action) {
	switch (action.type) {
		case FETCH_QUEENSHOP_HOT: 
			console.log('reducer: FETCH_QUEENSHOP_HOT')
			return state
		default:
			console.log('reducer: default')
			return state
	}
}