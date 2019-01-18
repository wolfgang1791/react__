import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WheatherExtraInfo = ({humidity,winds}) =>(
    <div className="weatherDataExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity}%`}</span>
        <span className="extraInfoText">{`Vientos: ${winds}`}</span>  {/* template string */}
    </div>
);

WheatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    winds : PropTypes.string.isRequired,
}
export default WheatherExtraInfo;