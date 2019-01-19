import React from 'react';
import WheatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WheatherLocation city="London,uk"></WheatherLocation>
        <WheatherLocation city="Lima,pe"></WheatherLocation>
        <WheatherLocation city="Bogota,col"></WheatherLocation>
    </div>
)

export default LocationList;