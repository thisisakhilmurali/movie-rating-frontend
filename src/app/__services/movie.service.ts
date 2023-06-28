import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MovieWithPoster } from '../model/movieWithPoster';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private httpClient: HttpClient
    ) { }

    PATH_OF_API = "http://localhost:9090";

    addMovie(movie: MovieWithPoster): Observable<any> {
      const formData = new FormData();
      formData.append('movieName', movie.movieName);
      formData.append('movieDirector', movie.movieDirector);
      formData.append('movieGenre', movie.movieGenre);
      formData.append('movieReleaseDate', movie.movieReleaseDate);
      formData.append('movieLanguage', movie.movieLanguage);
      formData.append('duration', movie.duration);
      formData.append('country', movie.country);
      formData.append('description', movie.description);
      formData.append('overallRate', movie.overallRate.toString());
      formData.append('file', movie.imageUrl as Blob);

      return this.httpClient.post(this.PATH_OF_API + "/api/admin/addMovie", formData, { responseType: 'text' });
    }
}
