import {Route}            from 'react-router'
import React, {Component} from 'react'

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
