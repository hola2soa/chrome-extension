import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';
import {replacePath}      from 'redux-simple-router';

import {fetchQueenshopHot} from '../actions/queenshop';

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

        <Aside />
        <Showcase items={items} />
      </div>
    );
  }
}

HomePage.onEnter = (store) => (nextState, replaceState, callback) => {
  if (!localStorage.name) return store.dispatch(replacePath('/welcome', nextState));

  store.dispatch(fetchQueenshopHot()).then(() => callback(), callback);
};

export default HomePage;
