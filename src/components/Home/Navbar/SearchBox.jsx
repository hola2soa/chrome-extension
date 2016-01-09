import React, {PropTypes} from 'react';
import {reduxForm}        from 'redux-form';

import searchValidator from './searchValidator';

@reduxForm({
  form: 'search',
  fields: ['keyword', 'min', 'max'],
  validate: searchValidator
})
export default class SearchBox extends React.Component {
  static propTypes = {
    fields:       PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {keyword, min, max},
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' {...keyword}/>
        </div>
        <div>
          <label>min</label>
          <input type='text' {...min}/>
          {min.touched && min.error}
        </div>
        <div>
          <label>max</label>
          <input type='text' {...max}/>
          {max.touched && max.error}
        </div>
        <button onClick={handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}
