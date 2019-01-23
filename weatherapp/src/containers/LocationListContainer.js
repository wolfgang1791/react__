import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCity} from './../actions'
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    handleSelectedLocation = ({city}) =>{
        this.props.dispatchsetCity(city);
    }  

    render() {
        return (
            <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    dispatchsetCity : PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchsetCity: value => dispatch(setCity(value))
    }
}


export default connect(null,mapDispatchToProps)(LocationListContainer);
/* mapstatetoprops: connect las inyecta(values) al componente como props (this.props)
   mapDispatchToProps: retorna un objeto con FUNCIONES que connect inyecta como props 
*/