import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';

import {fetchQueenshopHot} from '../actions/queenshop';

import Navbar   from '../components/Home/Navbar';
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
        <Navbar />
        <Aside />
        <Showcase items={items} />
      </div>
    );
  }
}

HomePage.onEnter = (store) => (nextState, replaceState, callback) => {
  store.dispatch(fetchQueenshopHot()).then(() => callback(), callback);
};

export default HomePage;
