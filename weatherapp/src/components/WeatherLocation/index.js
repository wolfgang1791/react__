import React,{Component} from 'react';
import WheatherData from './WeatherData';
import Location from './Location';
import './style.css'
import {SUN} from '../../constants/weathers';


const data ={
    temperature:80,
    weatherstate:SUN,
    humidity:50,
    winds:'10 m/s',
}

class WheatherLocation extends Component{
       
    
        render = () =>  (
            <div className="weatherLocationCont">
                <Location city={'Privet Drive'}/> 
                <WheatherData data={data}/>
            </div>
        );
}
export default WheatherLocation;