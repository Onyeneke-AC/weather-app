import axios from "axios";
import { WeatherDataProps } from '../types/index';

const api_key = "0cc86d16bf572f78cdc96c096c7627e5";
const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

export const fetchCurrentWeather = async (lat: number, lon: number) => {
    const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

    const res = await axios.get(url);
    return res.data;
};

export const fetchWeatherData = async (city: string) => {
    try {
        const url = `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`;
        const searchRes = await axios.get(url);

        const currentWeatherData : WeatherDataProps = searchRes.data;
        return {currentWeatherData};
    } catch (error) {
        console.error("No data found");
        throw error;
    };
};