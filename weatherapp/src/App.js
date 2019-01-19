import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WheatherLocation from './components/WeatherLocation/';
import './App.css';

class App extends Component {
  render() {
   //   console.log("debug");
      return (
          <MuiThemeProvider>
              <div className="App">
                <WheatherLocation></WheatherLocation>
              </div>
          </MuiThemeProvider>
      );

  }
}

export default App;
