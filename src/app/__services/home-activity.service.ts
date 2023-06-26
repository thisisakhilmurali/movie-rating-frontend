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


}
