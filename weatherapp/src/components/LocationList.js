import React from 'react';
import WheatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const stringToComponent = cities => (
    cities.map(city =>( <WheatherLocation city={city}></WheatherLocation>  ))
);

const LocationList = ({cities}) => (
    <div>
        {stringToComponent(cities)}
    </div>
)

LocationList.propTypes = {
    cities:PropTypes.array.isRequired,
}
export default LocationList;