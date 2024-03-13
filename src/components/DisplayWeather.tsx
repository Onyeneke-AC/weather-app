import React from 'react'
import { WeatherWrapper } from './styles.module'
import { AiOutlineSearch } from 'react-icons/ai';
import { WiHumidity } from 'react-icons/wi';
import { SiWindicss } from 'react-icons/si';
import { BsFillSunFill, BsCloudyFill, BsFillCloudRainFill, BsCloudFog2Fill } from 'react-icons/bs';
import { RiLoaderFill } from 'react-icons/ri';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import axios from 'axios';

function DisplayWeather() {

    const api_key = "0cc86d16bf572f78cdc96c096c7627e5";
    const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

    const fetchCurrentWeather = async (lat: number, lon: number) => {
        const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

        const res = await axios.get(url);
        return res.data;
    }

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            Promise.all([fetchCurrentWeather(latitude, longitude)])
            .then(
                ([currentWeather]) => {
                    console.log(currentWeather);
                }
            ) 
        })
    })

  return (
    <WeatherWrapper>
      <div className="container">

        <div className="searchArea">
            <input type="text" placeholder="Search City..." />
            <div className="searchCircle">
                <AiOutlineSearch className='searchIcon'/>
            </div>
        </div>

        <div className="weatherArea">
            <h1>Auckland</h1>
            <span>Nz</span>
            <div className="icon">
                icon
            </div>
            <h1>18c</h1>
            <h2>cloudy</h2>
        </div>

        <div className="bottomInfoArea">
            <div className="humidityLevel">
                <WiHumidity className='windIcon'/>
                <div className="humidInfo">
                    <h1>60%</h1>
                    <p>Humidity</p> 
                </div>
            </div>
            <div className="wind">
                <SiWindicss className="windIcon"/>
                <div className="humidInfo">
                    <h1>2.35km</h1>
                    <p>Wind Speed</p> 
                </div>
            </div>
        </div>
      </div>
    </WeatherWrapper>
  )
}

export default DisplayWeather
