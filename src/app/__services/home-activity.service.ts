import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { Rating } from '../model/rating';

@Injectable({
  providedIn: 'root'
})
export class HomeActivityService {

  constructor(private httpClient: HttpClient) { }

  // Base URL to connect to Backend
  private baseUrl = 'http://localhost:9090';

  // Method to get the movies by genre
  getMoviesByGenre(genre: string): Observable<Movie[]> {
    const url = `${this.baseUrl}/api/home/search/movie/genre/${genre}`;
    return this.httpClient.get<Movie[]>(url);
  }
  // Method to get the movies by name
  getMoviesByName(name: string): Observable<Movie[]> {
    const url = `${this.baseUrl}/api/home/search/movie/name/${name}`;
    return this.httpClient.get<Movie[]>(url);
  }

  // Method to get the movies by date
  getMoviesByDate(date: string): Observable<Movie[]> {
    const url = `${this.baseUrl}/api/home/search/movie/date/${date}`;
    return this.httpClient.get<Movie[]>(url);
  }

  // Method to get all the movies
  getAllMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/api/home/viewAllMovies`;
    return this.httpClient.get<Movie[]>(url);
  }

  // Method to get the movie by id
  getMovieById(movieId: number): Observable<Movie> {
    const url = `${this.baseUrl}/api/home/getByMovieId/${movieId}`;
    return this.httpClient.get<Movie>(url);
  }

  // Method to get the movie reviews
  getAllReviews(movieId: number): Observable<Rating> {
    const url = `${this.baseUrl}/api/home/getReviews/${movieId}`;
    return this.httpClient.get<Rating>(url);
  }


}
