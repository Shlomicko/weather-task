import {CityWeatherState} from './store/city-weather.state';


export interface AppState {
  readonly cityWeather: CityWeatherState;
}

export const selectCityWeather = (state: AppState) => state.cityWeather;


