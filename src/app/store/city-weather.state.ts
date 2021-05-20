import {createSelector} from '@ngrx/store';
import {selectCityWeather} from '../app.state';
import {CityWeatherResponse} from '../models/city-weather-response';

export interface CityWeatherState {
  data: CityWeatherResponse | null;
}

export const cityWeatherSelector = createSelector(
  selectCityWeather,
  weather => weather.data
);
