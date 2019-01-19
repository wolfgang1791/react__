import React from 'react';
import WheatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';


const LocationList = ({cities,onSelectedLocation}) => {

    const handleWeatherLocationOnClick = city =>{
        console.log("handleWeatherLocationOnClick");
        onSelectedLocation(city);
    }
    
    const stringToComponent = cities => (
        cities.map((city) =>
            ( 
                <WheatherLocation 
                    key={city} 
                    city={city}
                    onWeatherLocationOnClick={()=>handleWeatherLocationOnClick({city})}
                />
            )
        )
    );

    return (
        <div>
            {stringToComponent(cities)}
        </div>
    )
}

LocationList.propTypes = {
    cities:PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}
export default LocationList;