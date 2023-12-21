/**
 * Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */

import { WeatherReport } from "../types/owmapi.types";

const API_KEY = "7d07164c415624a8f477cd253d231922";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 2000;

export const getCurrentWeather = async (city:string) => {
    const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

	// check if response is ok
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`); // 404 Not Found
	}

// convert response from JSON
	const data: WeatherReport = await response.json();

	// fake a slow api
	FAKE_SLOW_API && await new Promise(r => setTimeout(r, FAKE_SLOW_API_DELAY));

	// return current weather conditions
	return data;
}


    
