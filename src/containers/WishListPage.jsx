import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';

import {unpin} from '../actions/queenshop';

import Navbar   from '../components/Home/Navbar';
import Aside    from '../components/Home/Aside';
import Showcase from '../components/WishListPage/Showcase';

import '../styles/HomePage.styl';

@connect(state => ({
  member: state.member.user,
  items: state.pin
}), {
  unpin
})
class WishListPage extends React.Component {
  static propTypes = {
    member: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    unpin: PropTypes.func.isRequired
  }

  render() {
    const {member, items} = this.props;
    return (
      <div className='container-fluid'>
        <Navbar member={member}/>
        <Aside/>
        <Showcase items={items} unpin={this.handleUnpin}/>
      </div>
    );
  }

  handleUnpin = (item) => {
    const {member, unpin} = this.props;
    unpin({
      email_address: member.email_address,
      item: item
    });
  }
}

WishListPage.onEnter = (store) => (nextState, replaceState, callback) => {
  callback();
};

export default WishListPage;
