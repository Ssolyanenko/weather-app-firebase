import {ActionText} from "../constants/text";

const initialState = {
    cities: [],
};
export const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionText.ADD_CITY:
            return { cities: [...state.cities, action.payload] };
        case ActionText.REMOVE_CITY:
            return { cities: state.cities.filter(city => city.id !== action.payload) };
        case ActionText.UPDATE_CITY:
            return {
                 cities: state.cities.map(city => city.id === action.payload.id ? action.payload : city)
            };
        default:
            return state;
    }
}
