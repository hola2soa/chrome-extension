import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';
import {replacePath}      from 'redux-simple-router';
import {isEmpty}          from 'lodash/lang';

import {fetchQueenshopHot} from '../actions/queenshop';
import {getMember}         from '../actions/member';

import Navbar   from '../components/Home/Navbar';
import Aside    from '../components/Home/Aside';
import Showcase from '../components/Home/Showcase';

import '../styles/HomePage.styl';

@connect(state => ({
  member: state.member.store,
  items: state.queenshop.store
}), {
  fetchQueenshopHot
})
class HomePage extends React.Component {
  static propTypes = {
    member: PropTypes.object.isRequired,
    items: PropTypes.object.isRequired
  }

  render() {
    const {member, items} = this.props;

    return (
      <div className='container-fluid'>
        <Navbar member={member}/>
        <Aside/>
        <Showcase items={items}/>
      </div>
    );
  }
}

HomePage.onEnter = (store) => (nextState, replaceState, callback) => {
  store.dispatch(getMember());
  const {member} = store.getState();
  if (isEmpty(member.store)) {
    return store.dispatch(replacePath('/members/new?step=1', nextState));
  }

  store.dispatch(fetchQueenshopHot()).then(() => callback(), callback);
};

export default HomePage;
