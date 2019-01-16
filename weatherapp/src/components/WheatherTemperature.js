import React from 'react';
import WeatherIcons from 'react-weathericons';


const getWeatherIcon = wheaterstate => { // un parametro xx()
  
    switch (wheaterstate) {
        case 'cloud':
            return(<WeatherIcons name='cloud' size="2x"/>)
            break;
    
        default:
            return(<WeatherIcons name='sleet' size="2x"/>)
    }

}


const WheatherTemperature = ({temperature,weatherstate})=>(
        <div>
            {getWeatherIcon({weatherstate})}
            <span>{`${temperature} °C`}</span>
        </div>
);

export default WheatherTemperature;