import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';
import {WeatherReducer} from "../store/reducer";

export type ReduxState = ReturnType<typeof WeatherReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, null, AnyAction>;
export const useTypedDispatch = (): TypedDispatch => useDispatch<TypedDispatch>();
