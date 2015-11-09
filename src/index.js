import React    from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider }    									from 'react-redux'

import App 				  		 from './containers/App'
import reducers 			   from './reducers'
import callAPIMiddleware from './middlewares/api'

let createStoreWithMiddleware = applyMiddleware(callAPIMiddleware)(createStore)
let store = createStoreWithMiddleware(reducers)
let rootDOM = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootDOM)
