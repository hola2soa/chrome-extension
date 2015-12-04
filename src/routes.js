import App      from './containers/App';
import HomePage from './containers/HomePage';

export default function getRoutes(store) {

  return {
    component: App,
    childRoutes: [
      {
        path: '/',
        component: HomePage,
        onEnter: HomePage.onEnter(store)
      }
    ]
  };
}
