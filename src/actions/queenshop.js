import {
	FETCH_QUEENSHOP_HOT,
	FETCH_QUEENSHOP_HOT_SUCCESS,
	FETCH_QUEENSHOP_HOT_FAIL
} from '../constants'

export function fetchQueenshopHot() {
	return {
		type: FETCH_QUEENSHOP_HOT
	}
}