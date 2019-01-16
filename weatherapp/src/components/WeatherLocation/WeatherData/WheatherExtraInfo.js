import React from 'react';
import PropTypes from 'prop-types';

const WheatherExtraInfo = ({humidity,winds}) =>(
    <div>
        <span>{`${humidity}% | `}</span>
        <span>{`${winds} winds`}</span>  {/* template string */}
    </div>
);

WheatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    winds : PropTypes.string.isRequired,
}
export default WheatherExtraInfo;