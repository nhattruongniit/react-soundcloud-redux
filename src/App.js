import React, { Component } from 'react';
import Stream from './components/Stream';

const tracks = [
  {
    title: 'some track',
  },
  {
    title: 'some other track'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stream tracks={tracks} />  
      </div>
    );
  }
}

export default App;
