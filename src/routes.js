import React   from 'react';
import {Route} from 'react-router';

// Pages
import App           from './containers/App';
import HomePage      from './containers/HomePage';
import WelcomePage   from './containers/WelcomePage';
import NewMemberPage from './containers/NewMemberPage';

export default function getRoutes(store) {

  return (
    <Route component={App}>
      <Route path='/'           component={HomePage} onEnter={HomePage.onEnter(store)}/>
      <Route path='welcome'     component={WelcomePage}/>
      <Route path='members/new' component={NewMemberPage}/>
    </Route>
  );
}
