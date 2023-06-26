import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeActivityService } from '../__services/home-activity.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeActivityService: HomeActivityService
  ) {}

  movieName: string = '';
  movieDate: string = '';

  movies: Movie[] = [];

  ngOnInit(): void {
    
    this.movieName = this.activatedRoute.snapshot.params['movieName'];
    this.movieDate = this.activatedRoute.snapshot.params['movieDate'];

    this.check()
    
  }


  check() {

    if(this.movieName != null) {

      console.log("Movie Name: " + this.movieName);
      this.getMoviesByName(this.movieName);
      this.addToHTML(this.movieName);

    } else if (this.movieDate != null) {

      this.addToHTML(this.movieDate);
      this.getMoviesByDate(this.movieDate);
      console.log("Movie Date: " + this.movieDate);

    }
    
  }

  addToHTML(searchTerm: string) {
    const spanElement: any = document.getElementById('searchTerm');
    const titleText = document.createTextNode(searchTerm);
    spanElement.appendChild(titleText);

  }


  getMoviesByName(name: string) {
    this.homeActivityService.getMoviesByName(name).subscribe(
      (response) => {
        this.movies = response
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getMoviesByDate(date: string) {
    this.homeActivityService.getMoviesByDate(date).subscribe(
      (response) => {
        this.movies = response
      },
      (error) => {
        console.log(error);
      }
    )
  }

  


}
