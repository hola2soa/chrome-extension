import React, {PropTypes} from 'react'
import {connect}          from 'react-redux'

import {fetchQueenshopHot} from '../actions/queenshop'

@connect(state => ({
  items: state
}), {
  fetchQueenshopHot
})
class HomePage extends React.Component {
  static propTypes = {
    items: PropTypes.object
  }

  render() {
    return (
      <div>
        <p>Home page</p>
      </div>
    )
  }
}

HomePage.onEnter = (store) => (nextState, replaceState, callback) => {
  store.dispatch(fetchQueenshopHot()).then(() => callback(), callback)
}

export default HomePage
