import {compose, createStore} from 'redux';
import middlewares from './middlewares'
import reducers    from '../reducers'

export default function composeStore(...functions) {

  const store = compose(
    middlewares,
    ...functions
  )(createStore)(reducers)

  return store
}
