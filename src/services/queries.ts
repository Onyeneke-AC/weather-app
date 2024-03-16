import { useQuery } from "@tanstack/react-query";
import { fetchWeatherSearch, fetchCurrentWeather } from "./api";

export function useSearchWeather(city: string) {
    return useQuery({
        queryKey: [city],
        queryFn: () => fetchWeatherSearch(city),
        enabled: !!city
    })
}

export function useLatLonWeather(lat: number | undefined, lon: number | undefined) {
    return useQuery({
        queryKey: [lat, lon],
        queryFn: () => fetchCurrentWeather(lat, lon),
        enabled: !!(lat && lon)
    })
}