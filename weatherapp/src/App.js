import React, { Component } from 'react';
import WheatherLocation from './components/WeatherLocation/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WheatherLocation></WheatherLocation>
      </div>
    );
  }
}

export default App;
