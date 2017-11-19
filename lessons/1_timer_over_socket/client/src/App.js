import React, { Component } from 'react';
import './App.css';
import { subscribeToTimer } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer(timestamp => {
      this.setState({
        timestamp,
      });
    });
  }

  state = {
    timestamp: 'not set',
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Our awesome drawing app</h2>
        </div>
        {this.state.timestamp}
      </div>
    );
  }
}

export default App;
