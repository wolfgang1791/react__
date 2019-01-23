import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Appbar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions/';
import './App.css';

const cities = ['London,uk','Lima,pe','Madrid,es','Moscu,rus','Guildford,uk','Glasgow,uk'];

class App extends Component {

    constructor(){
        super();
        this.state = {
            city:null
        };
    }


  handleSelectedLocation = ({city}) =>{
      this.setState({
        city
      });
     // console.log(`handleSelectionLocation ${city}`);
      this.props.dispatchsetCity(city);
  }  

  render() {
      let {city} = this.state;
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
                                {city && <ForecastExtended city={city}/>}
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


App.propTypes = {
    setCity : PropTypes.func.isRequired,
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatchsetCity: value => dispatch(setCity(value))
    }
}

export default connect(null,mapDispatchToProps)(App);
//const AppConnected = connect(null,mapDispatchToProps)(App);

//export default AppConnected;
