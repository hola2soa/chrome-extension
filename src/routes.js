import App from './containers/App'

export default {
  component: App,
    childRoutes: [
      {
        path: '/',
        component: App
      },
    ]
}
