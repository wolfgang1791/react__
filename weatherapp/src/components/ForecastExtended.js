import React,{Component} from 'react';
import PropTypes from 'prop-types';
//import ForecastItem from './ForecastItem';
import {api_id,url_forecast} from '../constants/api';
//import {transformForecast} from '../services/transformForecast';
import moment from 'moment';
import './styles.css';

class ForecastExtended extends Component{ 

    constructor(){
        super();
        this.state = {
            forecastData : null,
        }
    }

    transformForecast = data => {
        
        return data.list.filter(item =>(    
      
            moment.unix(item.dt).hour() === 4||
            moment.unix(item.dt).hour() === 13 ||
            moment.unix(item.dt).hour() === 16
      
        ))
    };
    
    componentDidMount=()=>{
        const api = `${url_forecast}${this.props.city}&appid=${api_id}`;
        
        fetch(api).then(data =>{
            return data.json();
        }).then(weather_data =>{
            console.log(weather_data);
            const forecastData = this.transformForecast(weather_data);
            console.log(forecastData);
            this.setState({
                forecastData
            });
        })
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