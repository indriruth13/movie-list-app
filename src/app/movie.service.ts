import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  baseUrl = environment.baseUrl;

  constructor( private http:HttpClient ) { }

  getMovie():Observable<any>{
    return this.http.get(`${this.apiUrl}list/1?page=1&api_key=${this.apiKey}`);
  }

  getGenre():Observable<any>{
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=en-US`)
  }
}
