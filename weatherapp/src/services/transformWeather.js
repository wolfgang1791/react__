import {SUN,THUNDER,DRIZZLE,SNOW,RAIN,CLOUDY} from './../constants/weathers';
import convert from 'convert-units';

const getWeatherState = weather => {
    
    const {id} = weather[0];
    //console.log(id);
    if(id < 300){
        return THUNDER;
    }
    else if(id < 400){
        return DRIZZLE;
    }
    else if(id < 600){
        return RAIN;
    }
    else if(id<700){
        return SNOW;
    }
    else if(id===800){
        return SUN;
    }
    else{
        return CLOUDY;
    }
}

const getTemperature = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(1));
}

const transformWeather = weather_data => {
    const {weather} =  weather_data;
    const {humidity,temp}= weather_data.main; 
    const {speed} = weather_data.wind;
    const weatherstate = getWeatherState(weather);
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