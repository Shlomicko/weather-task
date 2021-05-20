import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {City} from '../models/city';
import {citiesTable} from './cities-table';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() {
  }

  public filterCityByName(str: string): string[]{
    const cities = citiesTable.filter(city => city.name.toLowerCase().includes(str.toLowerCase())).map(city => city.name);
    return cities;
  }

}
