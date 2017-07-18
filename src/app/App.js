import React, { Component } from 'react';
import '../App.css';
import AppHeader from '../header/AppHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <h1>the great fooder</h1>
      </div>
    );
  }
}

export default App;
