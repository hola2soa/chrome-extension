import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';
import {pushPath}         from 'redux-simple-router';

import {createMember} from '../actions/member';

import MemberForm from '../components/Welcome/MemberForm';

@connect(state => ({
}), {
  createMember,
  pushPath
})
class WelcomePage extends React.Component {
  static propTypes = {
    createMember: PropTypes.func.isRequired,
    pushPath:     PropTypes.func.isRequired,
  };

  render() {

    return (
      <MemberForm onSubmit={this.register}/>
    );
  }

  register = (data) => {
    const {createMember, pushPath} = this.props;
    createMember(data).then(() => {
      pushPath('/');
    });
  }
}

export default WelcomePage;
