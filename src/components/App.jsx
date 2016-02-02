import React from 'react';
import * as RB from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
