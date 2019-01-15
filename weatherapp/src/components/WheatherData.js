import React from 'react';
import WheatherExtraInfo from './WheatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';


const WheatherData = () => (
    <div>
        <WheatherTemperature/>
        <WheatherExtraInfo humidity={'80'} winds={'10m/s'}/>
    </div>
)

export default WheatherData;
