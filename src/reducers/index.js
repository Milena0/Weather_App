import { combineReducers } from 'redux';
import WeatherReducer from './reducer_WeatherReducer'

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
