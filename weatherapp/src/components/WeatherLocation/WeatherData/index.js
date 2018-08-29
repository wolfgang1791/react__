import React from 'react';
import PropTypes from 'prop-types'
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
/*import {SNOW
  /* CLOUDY,
    SUN,
    RAIN,
    SNOW,
WINDY} from '../../../constants/weather'*/
import './style.css';

const WeatherData = ({data}) => {

const {temperature,weatherstate,humidity,wind} = data;
return(
    <div className="weatherDataCont">
        <WeatherTemperature temperature = {temperature} weatherstate = {weatherstate}/>
        <WeatherExtraInfo humidity={humidity} wind ={wind}/>
    </div>)
};

WeatherData.propTypes = {
    data : PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherstate:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired
    })
}
export default WeatherData;