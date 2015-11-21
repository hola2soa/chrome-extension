import React from 'react'
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react'

class Devtools extends React.Component {
  render() {
    const {store} = this.props
    
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    )
  }
}

export default Devtools
