import React, {PropTypes}      from 'react';
import {connect}               from 'react-redux';
import {pushPath}              from 'redux-simple-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// components
import NameForm      from '../components/NewMember/NameForm';
import EmailForm     from '../components/NewMember/EmailForm';
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

  constructor(props) {
    super(props);
    this.state = {
      animationEnd: true
    };
  }

  render() {
    const item = this.state.animationEnd ? this.renderChildren() : item;

    return (
      <ReactCSSTransitionGroup component='div'
        className='new-member-form container-fluid'
        transitionName='fade'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {item}
      </ReactCSSTransitionGroup>
    );
  }

  renderChildren = () => {
    const {location: {query: {step}}} = this.props;
    const handlers = {
      '1': this.handleNameForm,
      '2': this.handleEmailForm,
      '3': this.handleShopSelection
    };

    switch (step) {
      case '1':
        return <NameForm key={step} onSubmit={handlers[step]} handleAnimationEnd={this.handleAnimationEnd}/>;
      case '2':
        return <EmailForm key={step} name={this.state.name} onSubmit={handlers[step]} handleAnimationEnd={this.handleAnimationEnd}/>;
      case '3':
        return <ShopSelection key={step} onSubmit={handlers[step]}/>;
    }
  }

  handleNameForm = (data) => {
    const {pushPath} = this.props;
    this.setState({...data, animationEnd: false}, () => {
      pushPath('/members/new?step=2');
    });
  }

  handleEmailForm = (data) => {
    const {pushPath} = this.props;
    this.setState({...data, animationEnd: false}, () => {
      pushPath('/members/new?step=3');
    });
  }

  handleShopSelection = (data) => {
    this.setState({shops:{...data}}, () => {
      this.register(this.state);
    });
  }

  handleAnimationEnd = () => {
    this.setState({
      animationEnd: true
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
