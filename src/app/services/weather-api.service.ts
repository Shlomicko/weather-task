import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CityWeatherResponse} from '../models/city-weather-response';
import {ApiHttpService} from './api-http.service';
import {Constants} from '../shared/config/constants.service';
import {Builder} from '../shared/request-url-builder/builder';
import {QueryParams} from '../shared/request-url-builder/query-params';
import {Units} from '../data/units.enum';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private api: ApiHttpService, private constants: Constants) {
  }

  public getWeatherForCity(cityName: string, units: Units): Observable<CityWeatherResponse> {
    const builder: Builder = new Builder(this.constants.API_ENDPOINT
      , 'weather',
      new QueryParams([
        {key: 'q', value: cityName},
        {key: 'appid', value: this.constants.API_KEY},
        {key: 'units', value: units}
      ]));
    return this.api.get<CityWeatherResponse>(builder.toString());
  }

}
