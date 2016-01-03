import React, {PropTypes} from 'react';
import {reduxForm} from 'redux-form';

@reduxForm({
  form:   'shopSelection',
  fields: ['queenshop', 'joyceshop'],
  initialValues: {
    queenshop: false,
    joyceshop: false
  }
})
export default class ShopSelection extends React.Component {
  static propTypes = {
    fields:       PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {queenshop, joyceshop},
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type='checkbox' {...queenshop}/> queenshop
          </label>
          <label>
            <input type='checkbox' {...joyceshop}/> joyceshop
          </label>
        </div>
        <button onClick={handleSubmit}>
          Submit
        </button>
      </form>
    );
  }

}
