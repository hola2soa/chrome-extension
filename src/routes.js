import React   from 'react';
import {Route} from 'react-router';

import App         from './containers/App';
import HomePage    from './containers/HomePage';
import WelcomePage from './containers/WelcomePage';

export default function getRoutes(store) {

  return (
    <Route component={App} onEnter={App.onEnter(store)}>
      <Route path='/'       component={HomePage} onEnter={HomePage.onEnter(store)}/>
      <Route path='welcome' component={WelcomePage}/>
    </Route>
  );
}
