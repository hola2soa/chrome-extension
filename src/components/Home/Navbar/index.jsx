import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';
import {pushPath} from 'redux-simple-router';
import SearchBox from './SearchBox';
import {search} from '../../../actions/queenshop';
@connect(state => ({
}), {
  search,
  pushPath
})
export default class Navbar extends React.Component {
  static propTypes = {
    member: PropTypes.object.isRequired,
    search: PropTypes.func,
    pushPath: PropTypes.func
  };

  render() {
    const {member} = this.props;
    return (
      <div className='row navbar'>
        <SearchBox onSubmit={this.handleSearch}/>
        <p className='moniker'>Hello, {member.name}</p>
      </div>
    );
  }

  handleSearch = ({keyword, min = 0, max = 999999999}) => {
    const {search, pushPath} = this.props;
    min = min !== '' ? min : 0;
    max = max !== '' ? max : 999999999;
    search(keyword, min, max);
    pushPath('/search');
  }
}
