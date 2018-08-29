import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const Location = (props) => { // {city}
    const city = props.city; // {city} = props destructuting
    return <div className="Locationcont"><h1>{city}</h1></div>
};

Location.propTypes = {
    city : PropTypes.string.isRequired
}
export default Location;