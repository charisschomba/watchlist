import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MoviesDashboardService {
  constructor(private http: HttpClient) { };
  // url for getting movies
  url = `${environment.url}//3/list/1?api_key=${environment.api_key}`

  // fetches movies and returns an observable
  getMovies = () => {
    return this.http.get(this.url)
  }
}
