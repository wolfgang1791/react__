import React from 'react';
import PropTypes from 'prop-types';


const Location = (props) =>{
    //console.log(props);
    //debugger;
    const city = props.city; // const (city) = props destructuring Location = ({city})
    return( <div>
                <h1>{city}</h1>
            </div>
    )
}

Location.propTypes = {
    city : PropTypes.string.isRequired,
}
export default Location;