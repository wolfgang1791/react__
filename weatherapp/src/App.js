import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Appbar from 'material-ui/AppBar';
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
            <Grid>
                <Row>
                  <Col xs={12}>
                    <Appbar title="Weather App"/>
                   </Col> 
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper zDepth={4}>
                            <div className="detail">

                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
          </MuiThemeProvider>
      );

  }
}

export default App;
