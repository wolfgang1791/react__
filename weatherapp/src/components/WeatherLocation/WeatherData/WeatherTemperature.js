import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {CLOUD,
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY} from '../../../constants/weather'

const getWeatherIcons = (weatherstate) => {
    return (<WeatherIcons className="wicon" name={nameWeatherState(weatherstate)} size="4x" />);
}

const nameWeatherState = (weatherstate) => {
    switch (weatherstate) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        default:
            return "day-sunny";
    }
}


const WeatherTemperature = ({temperature,weatherstate}) => (
    <div className="WeatherTemperatureCont">
        { getWeatherIcons(weatherstate)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperaturetype">C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string,
}

export default WeatherTemperature;