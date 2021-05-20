import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Constants {
  public readonly API_ENDPOINT: string = 'https://api.openweathermap.org/data/2.5';
  public readonly API_KEY: string = '0d7303c17ee3d3482cd82a2ad273a90d';
  public readonly ICON_URL = (code: string) => `https://openweathermap.org/img/wn/${code}@2x.png`;
}

