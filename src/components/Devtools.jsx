import React, {PropTypes} from 'react';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

class Devtools extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {

    const {store} = this.props;

    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    )
  }
}

export default Devtools
