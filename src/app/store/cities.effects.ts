import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {WeatherApiService} from '../services/weather-api.service';
import * as CityWeatherActions from './cities.actions';
import {map, mergeMap} from 'rxjs/operators';


@Injectable()
export class CitiesEffects{

  public getCityWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CityWeatherActions.getCityWeatherAction),
      mergeMap(
        action => this.weather.getWeatherForCity(action.name, action.units).pipe(
          map(res => CityWeatherActions.getCityWeatherResponseAction({response: res}))
        )
      )
    )
  );

  constructor(private actions$: Actions, private weather: WeatherApiService) {
  }
}


