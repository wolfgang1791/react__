
import transformWeather from '../services/transformWeather';
import moment from 'moment';
import 'moment/locale/es'

const transformForecast = data => {
        
    return data.list.filter(item =>(    
  
        moment.unix(item.dt).hour() === 4||
        moment.unix(item.dt).hour() === 13 ||
        moment.unix(item.dt).hour() === 16
  
    )).map(item => ({
        weekDay:moment.unix(item.dt).format('ddd'),
        hour:moment.unix(item.dt).hour(),
        data:transformWeather(item)
    }))
};

export default transformForecast;
