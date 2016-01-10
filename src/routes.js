import React   from 'react';
import {Route} from 'react-router';

// Pages
import App           from './containers/App';
import HomePage      from './containers/HomePage';
import WelcomePage   from './containers/WelcomePage';
import NewMemberPage from './containers/NewMemberPage';
import WishListPage  from './containers/WishListPage';
import TopPage       from './containers/TopPage';
import PantPage      from './containers/PantPage';
import AccessoryPage from './containers/AccessoryPage';
import SearchPage    from './containers/SearchPage';

export default function getRoutes(store) {

  return (
    <Route component={App}>
      <Route path='/'           component={HomePage} onEnter={HomePage.onEnter(store)} onLeave={HomePage.onLeave(store)}/>
      <Route path='welcome'     component={WelcomePage}/>
      <Route path='members/new' component={NewMemberPage}/>
      <Route path='wishlist'    component={WishListPage}/>
      <Route path='top'         component={TopPage} onEnter={TopPage.onEnter(store)} onLeave={TopPage.onLeave(store)}/>
      <Route path='pants'       component={PantPage} onEnter={PantPage.onEnter(store)} onLeave={PantPage.onLeave(store)}/>
      <Route path='accessories' component={AccessoryPage} onEnter={AccessoryPage.onEnter(store)} onLeave={AccessoryPage.onLeave(store)}/>
      <Route path='search'      component={SearchPage}/>
    </Route>
  );
}
