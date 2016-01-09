import React, {PropTypes} from 'react';
import {reduxForm}        from 'redux-form';

import {emailValidator} from './formValidator';

@reduxForm({
  form: 'member',
  fields: ['email'],
  validate: emailValidator
})
export default class EmailForm extends React.Component {
  static propTypes = {
    fields:             PropTypes.object.isRequired,
    handleSubmit:       PropTypes.func.isRequired,
    name:               PropTypes.string,
    handleAnimationEnd: PropTypes.func.isRequired
  };

  componentWillUnmount() {
    this.props.handleAnimationEnd();
  }

  render() {
    const {
      fields: {email},
      handleSubmit,
      name
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className='email-form'>
        <div>
          <label>What's your email, {name} ?</label><br/>
          <input type='text' {...email}/>
        </div>
      </form>
    );
  }
}
