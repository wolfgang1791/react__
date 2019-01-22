import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import {api_id,url_forecast} from '../constants/api';
import './styles.css';
/*
const days = ['Lunes','Martes','Miercoles','Jueves','Viernes'];

const data = {
    temperature: 10,
    humidity: 10,
    weatherstate:'normal',
    winds:'normal'
}*/

class ForecastExtended extends Component{ 

    constructor(){
        super();
        this.state = {
            forecastdata : null,
        }
    }

    componentDidMount=()=>{

    }

    renderForecastItemDays = () => {
        return 'render items';
       /* return days.map(day => (
            <ForecastItem key={day} weekDay={day} hour={10} data={data}></ForecastItem>
        ));*/
    }

    renderProgress = () => {
        return 'cargando...';
    }

    render(){
        
        const {city} = this.props;
        const {forecastdata} = this.state;
        return(
            <div>
                <h3 className='forecast-title'>Pronóstico Extendido para {city}</h3>
                {forecastdata?this.renderForecastItemDays():this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
}

export default ForecastExtended;