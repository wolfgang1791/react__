import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const days = ['Lunes','Martes','Miercoles','Jueves','Viernes'];

const data = {
    temperature: 10,
    humidity: 10,
    weatherstate:'normal',
    winds:'normal'
}

class ForecastExtended extends Component{ 

    renderForecastItemDays = () => {
        return days.map(day => (
            <ForecastItem key={day} weekDay={day} hour={10} data={data}></ForecastItem>
        ));
    }

    render(){
        
        const {city} = this.props;     
        return(
            <div>
                <h3 className='forecast-title'>Pronóstico Extendido para {city}</h3>
                {this.renderForecastItemDays()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
}

export default ForecastExtended;