import {CityWeatherState} from './city-weather.state';
import {createReducer, on} from '@ngrx/store';
import * as CityWeatherActions from './cities.actions';

export const initialState: CityWeatherState = {
  data: null
};

export const cityWeatherReducer = createReducer(
  initialState,
  on(CityWeatherActions.getCityWeatherResponseAction, (state: CityWeatherState, {response}) => ({...state, data: response}))
);



