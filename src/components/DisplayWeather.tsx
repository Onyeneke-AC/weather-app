import React from 'react'
import { WeatherWrapper } from './styles.module'
import { AiOutlineSearch } from 'react-icons/ai';
import { WiHumidity } from 'react-icons/wi';
import { SiWindicss } from 'react-icons/si';

function DisplayWeather() {
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
