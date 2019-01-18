import React from 'react';
import WheatherData from './WeatherData';
import Location from './Location';
import './style.css'

const WheatherLocation = () =>  (
    <div className="weatherLocationCont">
        <Location city={'Privet Drive'}/> 
        <WheatherData/>
    </div>
);

export default WheatherLocation;