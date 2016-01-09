import React, {PropTypes} from 'react';

import SearchBox from './SearchBox';

export default class Navbar extends React.Component {
  static propTypes = {
    member: PropTypes.object.isRequired
  };

  render() {
    const {member} = this.props;
    return (
      <div className='row'>
        <SearchBox onSubmit={this.handleSearch}/>
        {member.name}
      </div>
    );
  }

  handleSearch = ({keyword, min, max}) => {
    console.log('searching...');
    console.log(keyword);
    console.log(min);
    console.log(max);
  }
}
