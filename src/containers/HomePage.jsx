import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';
import {replacePath}      from 'redux-simple-router';
import {isEmpty}          from 'lodash/lang';

import {fetchQueenshopHot} from '../actions/queenshop';
import {getMember}         from '../actions/member';

import Aside    from '../components/Home/Aside';
import Showcase from '../components/Home/Showcase';

import '../styles/HomePage.styl';

@connect(state => ({
  items: state.queenshop.store
}), {
  fetchQueenshopHot
})
class HomePage extends React.Component {
  static propTypes = {
    items: PropTypes.object
  }

  render() {
    const {items} = this.props;

    return (
      <div className='container-fluid'>
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
