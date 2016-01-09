import React, {PropTypes} from 'react';
import {reduxForm}        from 'redux-form';

import {nameValidator} from './formValidator';

@reduxForm({
  form: 'member',
  fields: ['name'],
  validate: nameValidator
})
export default class MemberForm extends React.Component {
  static propTypes = {
    fields:       PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleAnimationEnd: PropTypes.func.isRequired
  };

  componentWillUnmount() {
    this.props.handleAnimationEnd();
  }

  render() {
    const {
      fields: {name},
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className='name-form'>
        <div>
          <label>Hello, what's your name ?</label>
          <input type='text' {...name}/>
        </div>
      </form>
    );
  }
}
