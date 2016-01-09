import React, {PropTypes} from 'react';
import {reduxForm} from 'redux-form';

const fields = ['queenshop', 'joyceshop', 'mooncat'];

@reduxForm({
  form:   'shopSelection',
  fields: fields,
  initialValues: {
    queenshop: false,
    joyceshop: false,
    mooncat:   false
  }
})
export default class ShopSelection extends React.Component {
  static propTypes = {
    fields:       PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit} className='shop-selection-form'>
        <div>
          {this.renderShops()}
        </div>
        <button onClick={handleSubmit}/>
      </form>
    );
  }

  renderShops = () => {
    const {fields} = this.props;
    const labelUrl = 'https://s3-ap-northeast-1.amazonaws.com/e-shopping/shops';

    return Object.keys(fields).map(name => {
      const field = fields[name];

      return (
        <span className='shop'>
          <label htmlFor={name}>
            <img src={`${labelUrl}/${name}.png`}/>
          </label>
          <input id={name} type='checkbox' {...field}/>
          {this.handleSelect(field.value)}
        </span>
      );
    });
  }

  handleSelect = (selected) => {
    if (selected) {
      return <img className='shop__selected' src='https://s3-ap-northeast-1.amazonaws.com/e-shopping/icon/heart.png'/>;
    }
  }
}
