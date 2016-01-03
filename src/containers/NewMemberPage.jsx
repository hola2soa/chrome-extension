import React, {PropTypes}      from 'react';
import {connect}               from 'react-redux';
import {pushPath}              from 'redux-simple-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// components
import MemberForm    from '../components/NewMember/MemberForm';
import ShopSelection from '../components/NewMember/ShopSelection';

// style
import '../styles/NewMemberPage';

// actions
import {createMember} from '../actions/member';

@connect(state => ({
}), {
  createMember,
  pushPath
})
class NewMemberPage extends React.Component {
  static propTypes = {
    createMember: PropTypes.func.isRequired,
    pushPath:     PropTypes.func.isRequired,
    location:     PropTypes.object.isRequired
  };

  render() {
    return (
      <ReactCSSTransitionGroup component='div'
        transitionName='fade'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {this.renderChildren()}
      </ReactCSSTransitionGroup>
    );
  }

  renderChildren = () => {
    const {location: {query: {step}}} = this.props;
    const handlers = {
      '1': this.handleMemberForm,
      '2': this.handlerShopSelection
    };

    switch (step) {
      case '1':
        return <MemberForm key={step} onSubmit={handlers[step]}/>;
      case '2':
        return <ShopSelection key={step} onSubmit={handlers[step]}/>;
    }
  }

  handleMemberForm = (data) => {
    const {pushPath} = this.props;
    this.setState({...data}, () => {
      pushPath('/members/new?step=2');
    });
  }

  handlerShopSelection = (data) => {
    this.setState({shops:{...data}}, () => {
      this.register(this.state);
    });
  }

  register = (data) => {
    const {createMember, pushPath} = this.props;
    createMember(data).then(() => {
      pushPath('/');
    });
  }


}

export default NewMemberPage;
