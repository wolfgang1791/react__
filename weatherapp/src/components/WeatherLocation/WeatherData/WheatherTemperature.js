import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {WINDY,SNOW,RAIN,SUN,CLOUDY,CLOUD,DRIZZLE,THUNDER} from '../../../constants/weathers';
import './style.css';


const stateToIconName = weatherstate =>{
   
    switch (weatherstate) {
        case CLOUD:
                return "cloud";

        case CLOUDY:
                return "cloudy";
                
        case SUN:
                return "day-sunny";
                
        case RAIN:
                return 'rain';
                
        case SNOW:
                return "snow";
                
        case WINDY:
                return "windy";

        case DRIZZLE:
                return "day-showers";
                
        case THUNDER:
                return "day-thunderstorm";
    
    
        default:
                return "day-sunny";
    }

}

const getWeatherIcon = weatherstate => { // un parametro xx()
        return(<WeatherIcons className="wicon" name={stateToIconName(weatherstate)} size="4x"/>)
}


const WheatherTemperature = (props)=>{//{temperature,weatherstate}
      //  const weatherstate = props.weatherstate;
        return(<div className="weatherDataTemperatureCont">
            {getWeatherIcon(props.weatherstate)}
            <span className="temperature">{`${props.temperature}`}</span>
            <span className="temperaturetype">°C</span>
        </div>)
};

WheatherTemperature.propTypes = { // validacion de tipado de js
    temperature : PropTypes.number.isRequired,
    weatherstate : PropTypes.string,
};
export default WheatherTemperature;