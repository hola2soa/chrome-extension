import React, {PropTypes} from 'react';
import {reduxForm}        from 'redux-form';

@reduxForm({
  form: 'search',
  fields: ['keyword', 'min', 'max']
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
      <form onSubmit={handleSubmit} className='search-box'>
        <div className='search-box--keyword'>
          <input type='text' {...keyword}/>
        </div>
        <div className='search-box--min'>
          <label>$</label>
          <input type='text' {...min}/>
        </div>
        <span className='price-break-line'>~</span>
        <div className='search-box--max'>
          <label>$</label>
          <input type='text' {...max}/>
        </div>
        <button onClick={handleSubmit} className='search-box--submit'>
          <i className='fa fa-search'></i>
        </button>
      </form>
    );
  }
}
