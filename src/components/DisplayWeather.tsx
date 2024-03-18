import React from 'react'
import { WeatherWrapper } from './styles.module'
import { AiOutlineSearch } from 'react-icons/ai';
import { WiHumidity } from 'react-icons/wi';
import { SiWindicss } from 'react-icons/si';
import { RiLoaderFill } from 'react-icons/ri';
import { WeatherDataProps } from '../types/index';
import { iconChanger } from './iconChanger';
import { useLatLonWeather, useSearchWeather } from '../services/queries';

function DisplayWeather() {

    const [weatherData, setWeatherData] = React.useState<WeatherDataProps | null>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [searchCity, setSearchCity] = React.useState("");
    const [place, setPlace] = React.useState("");
    const [lat, setLat] = React.useState<number>();
    const [lon, setLon] = React.useState<number>();
    const sky = useSearchWeather(place);
    const geo = useLatLonWeather(lat, lon);

    const handleSearch = () => {
        if (searchCity.trim() === "" ){
            return;
        }
        setPlace(searchCity);
        try {
            if(!sky.isLoading && sky.data !== undefined){
                setWeatherData(sky.data);
            } 
        }catch (error) {
            console.error("No results found");
        }
    }


    React.useEffect(() => {
        if (geo.data) {
            setWeatherData(geo.data);
            setIsLoading(true);
        }
    }, [geo.data, lat, lon]);


    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            
            setLat(latitude);
            setLon(longitude); 
        })
    }, []);

  return (
    <WeatherWrapper>
      <div className="container">

        <div className="searchArea">
            <input type="text" placeholder="Search City..." value={searchCity} onChange={
                (e) => setSearchCity(e.target.value)}/>
            <div className="searchCircle">
                <AiOutlineSearch className='searchIcon' onClick={handleSearch}/>
            </div>
        </div>

        {
            weatherData && isLoading ? (
            <> 
                <div className="weatherArea">
                    <h1>{weatherData.name}</h1>
                    <span>{weatherData.sys.country}</span>
                    <div className="icon">
                        {iconChanger(weatherData.weather[0].main)}
                    </div>
                    <h1>{weatherData.main.temp}</h1>
                    <h2>{weatherData.weather[0].main}</h2>
                </div>
        
                <div className="bottomInfoArea">
                    <div className="humidityLevel">
                        <WiHumidity className='windIcon'/>
                        <div className="humidInfo">
                            <h1>{weatherData.main.humidity}%</h1>
                            <p>Humidity</p> 
                        </div>
                    </div>
                    <div className="wind">
                        <SiWindicss className="windIcon"/>
                        <div className="humidInfo">
                            <h1>{weatherData.wind.speed}</h1>
                            <p>Wind Speed</p> 
                        </div>
                    </div>
                </div>
            </>
            ) : (
               <div className="loading">
                <RiLoaderFill className='loadingIcon' />
                <p>Loading</p>
               </div> 
            )
        }
        </div>

    </WeatherWrapper>
  )
}

// Try using useRef for the search feature
// check whether we can make use of useReducer too

export default DisplayWeather
