import React,{Component} from 'react' // {} parte de react
import Location from './Location'
import WeatherData from './WeatherData'
import { SUN} from '../../constants/weather'


const location = 3936456;
const api_key = "8c38ea22d7d25dd9fd4f4d760b029fa8";
const api_weather = `http://api.openweathermap.org/data/2.5/forecast?id=${location}&APPID=${api_key}`
const  data = {
    temperature:20,
    weatherstate:SUN,
    humidity:10,
    wind:'10 m/s'
}
class WeatherLocation extends Component{ 
    
    constructor(){
        super();
        this.state = {
            city:"Lima",
            data: data
        }
    }

    getWeatherState = weather => {
        return SUN;
    }

    getData = weather_data => {
        
        const { humidity, temp} = weather_data.list[0].main
        const { speed } = weather_data.list[0].wind
        const weatherstate = this.getWeatherState(this.weather);
 
        const data = {
            humidity,
            temperature: temp,
            weatherstate,
            wind:`${speed} m/s`
        }

        return data;
    }

    handleUpdateClick = () =>{

      fetch(api_weather).then( data => { 
        console.log(data);
        return data.json();
      }).then(weather_data =>{
          let data = this.getData(weather_data)
          this.setState({data})
          console.log(weather_data);
          //debugger;
      })
        /* this.setState({
        //city:"LA PAZ",
        data: data2
       })*/
    }
    
    render = () => {
      const{city,data} = this.state;
      return  <div className="weatherLocationCont">
            <Location city={city}/>
            <WeatherData data = {data}/>
            <button onClick={this.handleUpdateClick}>Select y Start</button>
        </div>
    };
}
export default WeatherLocation;