import React, {Component} from 'react'
import ReactDOM           from 'react-dom'

import {Provider}            from 'react-redux'
import {Router}              from 'react-router'
import {syncReduxAndRouter}  from 'redux-simple-router'
import {createMemoryHistory} from 'history'

import routes         from './routes'
import configureStore from './store/configureStore'

let store   = configureStore();
let history = createMemoryHistory()
let rootDOM = document.getElementById('root')

syncReduxAndRouter(history, store)

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Root/>, rootDOM)
