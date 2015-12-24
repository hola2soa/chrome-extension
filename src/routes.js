import App         from './containers/App';
import HomePage    from './containers/HomePage';
import WelcomePage from './containers/WelcomePage';

export default function getRoutes(store) {

  return {
    component: App,
    onEnter: App.onEnter(store),

    childRoutes: [
      {
        path: '/',
        component: HomePage,
        onEnter: HomePage.onEnter(store)
      },

      {
        path: '/welcome',
        component: WelcomePage
      }
    ]
  };
}
