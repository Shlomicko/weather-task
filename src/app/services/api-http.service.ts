import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string, options?: {responseType?: 'json'}): Observable<T> {
    return this.http.get<T>(url, options);
  }

  public post<T>(url: string, data?: any, options?: {responseType?: 'json'}): Observable<T> {
    return this.http.post<T>(url, data, options);
  }

  public put<T>(url: string, data: any, options?: {responseType?: 'json'}): Observable<T>{
    return this.http.put<T>(url, data, options);
  }

  public delete<T>(url: string, options?: {responseType?: 'json'}): Observable<T> {
    return this.http.delete<T>(url, options);
  }

}
