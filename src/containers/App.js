import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'

import { fetchQueenshopHot } from '../actions/queenshop'

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
      </div>
    );
  }
};

export default connect()(App)
