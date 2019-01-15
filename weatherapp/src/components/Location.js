import React from 'react';

const Location = (props) =>{
    //console.log(props);
    //debugger;
    const city = props.city; // const (city) = props destructuring Location = ({city})
    return( <div>
                <h1>{city}</h1>
            </div>
    )
}

export default Location;