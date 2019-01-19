import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = ['London,uk','Lima,pe','Madrid,es','Moscu,rus','Guildford,uk','Glasgow,uk'];
class App extends Component {

  handleSelectedLocation = ({city}) =>{
      console.log(`handleSelectionLocation ${city}`);
  }  

  render() {
   //   console.log("debug");
      return (
          <MuiThemeProvider>
              <div className="App">
                <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
              </div>
          </MuiThemeProvider>
      );

  }
}

export default App;
