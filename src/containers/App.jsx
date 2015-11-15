import React, {Component, PropTypes} from 'react'
import {Link}                        from 'react-router'
import {connect}                     from 'react-redux'

import {fetchQueenshopHot} from '../actions/queenshop'

class App extends Component {

  constructor(props) {
    super(props)

    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    this.props.dispatch(fetchQueenshopHot())
  }

  render() {
    return (
      <div>
        <p>queenshop</p>
        <button onClick={this.fetch}>click!!!</button>
        <Link to='/yo'>app</Link>
        {this.props.children}
      </div>
    );
  }
};

export default connect()(App)
