import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WheatherExtraInfo = ({humidity,winds}) =>(
    <div className="weatherDataExtraInfoCont">
        <span className="extraInfoText">{`humedad: ${humidity}%`}</span>
        <span className="extraInfoText">{`${winds} vientos`}</span>  {/* template string */}
    </div>
);

WheatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    winds : PropTypes.string.isRequired,
}
export default WheatherExtraInfo;