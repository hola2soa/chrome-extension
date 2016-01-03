import React, {PropTypes} from 'react';
import {reduxForm}        from 'redux-form';

import memberValidator    from './memberValidator';

@reduxForm({
  form: 'member',
  fields: ['name'],
  validate: memberValidator
})
export default class MemberForm extends React.Component {
  static propTypes = {
    fields:       PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {name},
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type='text' placeholder='First Name' {...name}/>
          {name.touched && name.error}
        </div>
        <button onClick={handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}
