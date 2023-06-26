import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HomeActivityService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:9090';

  getMoviesByGenre(genre: string): Observable<Movie[]> {
    const url = `${this.baseUrl}/api/home/search/movie/genre/${genre}`;
    return this.httpClient.get<Movie[]>(url);
  }

  getMoviesByName(name: string): Observable<Movie[]> {
    const url = `${this.baseUrl}/api/home/search/movie/name/${name}`;
    return this.httpClient.get<Movie[]>(url);
  }

  getMoviesByDate(date: string): Observable<Movie[]> {
    const url = `${this.baseUrl}/api/home/search/movie/date/${date}`;
    return this.httpClient.get<Movie[]>(url);
  }

  getAllMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/api/home/viewAllMovies`;
    return this.httpClient.get<Movie[]>(url);
  }  


}
