import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';
import {replacePath}      from 'redux-simple-router';

import {fetchShop, cleanShop, pin, unpin, fetchPinned} from '../actions/queenshop';
import {getMember, login}         from '../actions/member';

import Navbar   from '../components/Home/Navbar';
import Aside    from '../components/Home/Aside';
import Showcase from '../components/Home/Showcase';

import '../styles/HomePage.styl';

@connect(state => ({
  member: state.member.user,
  items: state.clothes,
  pinnedItems: state.pin
}), {
  pin,
  unpin
})
class HomePage extends React.Component {
  static propTypes = {
    member: PropTypes.object.isRequired,
    items: PropTypes.array,
    pinnedItems: PropTypes.array,
    pin: PropTypes.func.isRequired,
    unpin: PropTypes.func.isRequired
  }

  render() {
    const {member, items, pinnedItems} = this.props;
    return (
      <div className='container-fluid'>
        <Navbar member={member} handleSearch={this.handleSearch}/>
        <Aside/>
        <Showcase items={items} pinnedItems={pinnedItems} pin={this.handlePin} unpin={this.handleUnpin}/>
      </div>
    );
  }

  handlePin = (item) => {
    const {member, pin} = this.props;
    pin({
      email_address: member.email_address,
      item: item
    });
  }

  handleUnpin = (item) => {
    const {member, unpin} = this.props;
    unpin({
      email_address: member.email_address,
      item: item
    });
  }
}

HomePage.onEnter = (store) => (nextState, replaceState, callback) => {
  store.dispatch(getMember());
  const auth = store.getState().member;

  if (!auth.authorized) {
    return store.dispatch(replacePath('/members/new?step=1', nextState));
  }

  store.dispatch(login(auth.user.email_address)).then(() => {
    const tasks = auth.user.stores.map(shop => store.dispatch(fetchShop(shop.name)));
    tasks.push(store.dispatch(fetchPinned({email_address: auth.user.email_address})));
    Promise.all(tasks).then();
  });
  callback();
};

HomePage.onLeave = (store) => () => {
  store.dispatch(cleanShop());
};

export default HomePage;
