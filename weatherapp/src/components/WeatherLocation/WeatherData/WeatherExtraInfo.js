import React from 'react'


const WeatherExtraInfo = ({humidity,wind}) => (
    <div className="WeatherExtraInfoCont">
        <span className="extrainfotext">
            { `Humedad: ${humidity}% `} 
        </span>
        <span className="extrainfotext">
            {` Vientos: ${wind}`} 
        </span>
    </div>
);

export default WeatherExtraInfo;