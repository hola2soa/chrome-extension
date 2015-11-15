import React, {Component, PropTypes} from 'react'
import {connect}                     from 'react-redux'

import {fetchQueenshopHot} from '../actions/queenshop'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>queenshop</p>
        <button onClick={this.fetch}>click!!!</button>
        {this.props.children}
      </div>
    );
  }

  fetch = () => {
    this.props.dispatch(fetchQueenshopHot(10))
  }
};

export default connect()(App)
