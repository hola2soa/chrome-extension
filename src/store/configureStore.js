import {createStore} from 'redux'

import middlewares from './middlewares'
import reducers    from '../reducers'

export default function configureStore() {
  return middlewares(createStore)(reducers)
}
