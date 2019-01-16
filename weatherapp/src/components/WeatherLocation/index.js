import React from 'react';
import WheatherData from './WeatherData';
import Location from './Location';


const WheatherLocation = () =>  (
    <div>
        <Location city={'Privet Drive'}/> 
        <WheatherData/>
    </div>
);

export default WheatherLocation;