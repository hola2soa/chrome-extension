import React    from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider }    from 'react-redux'

import App 				  from './containers/App'
import reducers from './reducers'


let store = createStore(reducers);
let rootDOM = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootDOM)
