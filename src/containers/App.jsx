import React, {PropTypes} from 'react'

class App extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>queenshop</p>
        {this.props.children}
      </div>
    );
  }
};

export default App
