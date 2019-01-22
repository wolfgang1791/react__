import React from 'react';
import WheatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';


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
        <div className="locationList">
            {stringToComponent(cities)}
        </div>
    )
}

LocationList.propTypes = {
    cities:PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}
export default LocationList;