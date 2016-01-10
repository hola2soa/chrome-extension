import React, {Component} from 'react';
import ReactDOM           from 'react-dom';

import {Provider}            from 'react-redux';
import {Router}              from 'react-router';
import {syncReduxAndRouter}  from 'redux-simple-router';
import {createMemoryHistory} from 'history';

import getRoutes      from './routes';
import configureStore from './store/configureStore';
import Devtools       from './components/Devtools';

let store   = configureStore();
let history = createMemoryHistory();
let rootDOM = document.getElementById('root');

syncReduxAndRouter(history, store);

class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>
            {getRoutes(store)}
          </Router>
        </Provider>
        <Devtools store={store}/>
      </div>
    );
  }
}

ReactDOM.render(<Root/>, rootDOM);
