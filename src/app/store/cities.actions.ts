import {createAction, props} from '@ngrx/store';
import {WeatherActionNames} from './weather-action-names';
import {CityWeatherResponse} from '../models/city-weather-response';
import {Units} from '../data/units.enum';

export const getCityWeatherAction = createAction(
  WeatherActionNames.GetWeatherForCity,
  props<{name: string, units: Units}>()
);

export const getCityWeatherResponseAction = createAction(
  WeatherActionNames.GetWeatherForCityResponse,
  props<{response: CityWeatherResponse}>()
);


