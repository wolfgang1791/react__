import {SUN} from './../constants/weathers';
import convert from 'convert-units';

const getWeatherState = weather => {
    return SUN;
}

const getTemperature = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(1));
}

const transformWeather = weather_data => {

    const {humidity,temp}= weather_data.main; 
    const {speed} = weather_data.wind;
    const weatherstate = getWeatherState('');
    const temperature = getTemperature(temp);

    const data = {
        humidity,
        temperature,
        winds:`${speed}m/s`,
        weatherstate,
    }

    return data;
}

export default transformWeather;