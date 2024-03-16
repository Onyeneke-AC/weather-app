import axios from "axios";
import { WeatherDataProps } from '../types/index';

const api_key = "0cc86d16bf572f78cdc96c096c7627e5";
const api_Endpoint = "https://api.openweathermap.org/data/2.5/";


export const fetchWeatherSearch = async (city: string) => {

    try{
        const url = `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`;

        const res = await axios.get<WeatherDataProps>(url);
        return res.data;
    } catch (err) {
        console.log("Data incorrect");
    }
} 

export const fetchCurrentWeather = async (lat: number | undefined, lon: number | undefined) => {
    try {
        const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        console.log("Location not found");
    }
};




