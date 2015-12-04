import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';

import {fetchQueenshopHot} from '../actions/queenshop';

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
      <div>
        <p>Home page</p>
        {items.map(item => (
          <div>
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

HomePage.onEnter = (store) => (nextState, replaceState, callback) => {
  store.dispatch(fetchQueenshopHot()).then(() => callback(), callback);
};

export default HomePage;
