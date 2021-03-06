import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Appbar from 'material-ui/AppBar';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer';
import './App.css';

const cities = ['London,uk','Lima,pe','Madrid,es','Moscu,rus','Guildford,uk','Glasgow,uk'];

class App extends Component {

  render() {
    
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
                        <LocationListContainer cities={cities}></LocationListContainer> 
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper zDepth={4}>
                            <div className="detail">
                                <ForecastExtendedContainer></ForecastExtendedContainer>
                                {/* city && <ForecastExtended city={city}/>:<h3>No se selecciono ciudad</h3> (null)*/}
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
