import axios from 'axios';

const API_KEY = '7358ca7650d302edbfbe11d573bbe1a0';
// need to pass q={city name},{country code} to query specific city
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// to keep action type consistent between 
// our creators and our reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	// make actual request using Axios, return a promise
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}