import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

class App extends Component {
  render() {
   //   console.log("debug");
      return (
          <MuiThemeProvider>
              <div className="App">
                <LocationList></LocationList>
              </div>
          </MuiThemeProvider>
      );

  }
}

export default App;
