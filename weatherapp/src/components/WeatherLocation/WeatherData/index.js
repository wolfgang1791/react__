import React from 'react';
import WheatherExtraInfo from './WheatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';
import {WINDY,SNOW,RAIN,SUN,CLOUDY,CLOUD} from '../../../constants/weathers';
import './style.css';

const WheatherData = () => (
    <div className="weatherDataCont">
        <WheatherTemperature temperature={20} weatherstate={SNOW}/>
        <WheatherExtraInfo humidity={80} winds={'10m/s'}/>
    </div>
)

export default WheatherData;
