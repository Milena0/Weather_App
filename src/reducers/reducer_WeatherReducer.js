//reducer for handling fetch_weather action
import { FETCH_WEATHER } from '../actions/index'

//state = array because data structure for state is going to be array of cities
const WeatherReducer = (state = null, action) => {
    switch(action.type) {
        case FETCH_WEATHER:
            //we going to store all of the pieces of weather data in a array
            //.data has weather data from server
            return [action.payload.data, ...state]; //es6 syntax, it looks like [city, city, city]
            //OR return state.concat([action.payload.data]);
    }
    return state
};

export default WeatherReducer;


