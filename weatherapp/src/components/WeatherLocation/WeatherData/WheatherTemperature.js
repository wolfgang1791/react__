import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {WINDY,SNOW,RAIN,SUN,CLOUDY,CLOUD} from '../../../constants/weathers';

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
    
        default:
                return "day-sunny";
    }

}

const getWeatherIcon = weatherstate => { // un parametro xx()
        return(<WeatherIcons name={stateToIconName(weatherstate)} size="2x"/>)
}


const WheatherTemperature = (props)=>{//{temperature,weatherstate}
      //  const weatherstate = props.weatherstate;
        return(<div>
            {getWeatherIcon(props.weatherstate)}
            <span>{`${props.temperature} °C`}</span>
        </div>)
};

WheatherTemperature.propTypes = { // validacion de tipado de js
    temperature : PropTypes.number.isRequired,
    weatherstate : PropTypes.string,
};
export default WheatherTemperature;