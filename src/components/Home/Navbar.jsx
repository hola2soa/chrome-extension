import React, {PropTypes} from 'react';

export default class Navbar extends React.Component {
  static propTypes = {
    member: PropTypes.object.isRequired
  };

  render() {
    const {member} = this.props;
    return (
      <div className='row' style={{height: 100}}>
        {member.name}
      </div>
    );
  }
}
