import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';

import Navbar   from '../components/Home/Navbar';

import {getMember} from '../actions/member';

@connect(state => ({
  member: state.member.store
}))
class App extends React.Component {
  static propTypes = {
    member: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {member} = this.props;
    return (
      <div>
        <Navbar member={member}/>
        {this.props.children}
      </div>
    );
  }
};

App.onEnter = (store) => (nextState, replaceState, callback) => {
  store.dispatch(getMember());
  callback();
};

export default App;
