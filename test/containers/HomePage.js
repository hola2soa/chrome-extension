import React    from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils        from 'react-addons-test-utils';
import {Provider}            from 'react-redux';
import {syncReduxAndRouter}  from 'redux-simple-router';
import {createMemoryHistory} from 'history';

import configureStore from '../../src/store/configureStore';
import HomePage       from '../../src/containers/HomePage';

let store   = configureStore();
let history = createMemoryHistory();

syncReduxAndRouter(history, store);

describe('HomePage', function() {
  let dom;

  before(function() {
    const renderer = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <HomePage/>
      </Provider>
    );
    dom = ReactDOM.findDOMNode(renderer);
  });

  it('should has correct className', function() {
    dom.className.should.include('container-fluid');
  });
});
