import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import {api_id,url_forecast} from '../constants/api';
import transformForecast from '../services/transformForecast';
import './styles.css';

class ForecastExtended extends Component{ 

    constructor(){
        super();
        this.state = {
            forecastData : null,
        }
    }
 
    componentDidMount=()=>{
        const api = `${url_forecast}${this.props.city}&appid=${api_id}`;
        
        fetch(api).then(data =>{
            return data.json();
        }).then(weather_data =>{
            console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            console.log(forecastData);
            this.setState({
                forecastData 
            });
        })
    }

    renderForecastItemDays = (forecastdata) => {
     
         return forecastdata.map(forcast => (
            <ForecastItem key={`${forcast.weekDay}${forcast.hour}`} weekDay={forcast.weekDay} hour={forcast.hour} data={forcast.data}></ForecastItem>
        ));
    }

    renderProgress = () => {
        return 'cargando...';
    }

    render(){
        
        const {city} = this.props;
        const {forecastData} = this.state;
        
        return(
            <div>
                <h3 className='forecast-title'>Pronóstico Extendido para {city}</h3>
                {forecastData?this.renderForecastItemDays(forecastData):this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
}

export default ForecastExtended;