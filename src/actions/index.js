//MIDDLEWARE - function where actions pass through for hitting the reducers
import axios from 'axios';

const API_KEY = 'd16b7246d72b77927ad1b1997ad275f5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

const fetchWeather = city => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
};
export default fetchWeather;
