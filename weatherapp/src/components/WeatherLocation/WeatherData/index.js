import React from 'react';
import WheatherExtraInfo from './WheatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';
//import {WINDY,SNOW,RAIN,SUN,CLOUDY,CLOUD} from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './style.css';

const WheatherData = ({data}) => { //arrow function

    const {temperature,weatherstate,humidity,winds} = data;

    return (
    <div className="weatherDataCont">
        <WheatherTemperature temperature={temperature} weatherstate={weatherstate}/>
        <WheatherExtraInfo humidity={humidity} winds={winds}/>
    </div>
    )
}

WheatherData.propTypes = {
    data:PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherstate:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        winds:PropTypes.string.isRequired,
    }),
}

export default WheatherData;
