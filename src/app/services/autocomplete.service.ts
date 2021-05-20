import { Injectable } from '@angular/core';
import {EMPTY, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor() { }

  public filter<T>(query: string, source: T[], searchField: string = 'name'): Observable<T>{
    return EMPTY;
  }


}
