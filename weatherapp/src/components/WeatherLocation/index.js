import React,{Component} from 'react'; // parte todo
import WheatherData from './WeatherData';
import Location from './Location';
import './style.css'
import {SUN, WINDY} from '../../constants/weathers';


const data1 ={
    temperature:80,
    weatherstate:SUN,
    humidity:50,
    winds:'10 m/s',
}

const data2 ={
    temperature:15,
    weatherstate:WINDY,
    humidity:12,
    winds:'0.5 m/s',
}

class WheatherLocation extends Component{
       
        constructor(){
            super();
            this.state = {
                city: 'Privet Drive',
                data: data1,
            };
        }

        handleUpdateClick = ()=>{
            console.log("Con esa mirada tan hiriente");
            
            if(this.state.data === data1){
                this.setState({
                    city: 'Surey',
                    data:data2,
                });
            }    
            else{
                this.setState({
                   city: 'Privet Drive',
                data: data1,
                });
            }
        }
        render = () =>  {
            const {city,data} = this.state;
            return(
                <div className="weatherLocationCont">
                    <Location city={city}/> 
                    <WheatherData data={data}/>
                    <button onClick={this.handleUpdateClick}>Actualizar</button>
                </div>
            )
        };
}
export default WheatherLocation;