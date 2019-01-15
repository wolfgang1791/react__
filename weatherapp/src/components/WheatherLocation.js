import React from 'react';
import WheatherData from './WheatherData';
import Location from './Location';


const WheatherLocation = () =>  (
    <div>
        <Location city={'Privet Drive'}/> 
        <WheatherData/>
    </div>
);

export default WheatherLocation;