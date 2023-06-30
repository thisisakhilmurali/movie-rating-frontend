import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie';
import { HomeActivityService } from '../__services/home-activity.service';
import { Rating } from '../model/rating';

@Component({
  selector: 'app-user-movie-component',
  templateUrl: './user-movie-component.component.html',
  styleUrls: ['./user-movie-component.component.css']
})
export class UserMovieComponentComponent implements OnInit {
 
  constructor(
    private activatedRoute: ActivatedRoute,
    private homeActivityService: HomeActivityService
    ) { }

  theMovieId: number = 0;
  selectedMovie: Movie = new Movie();

  ngOnInit(): void {
    this.theMovieId =  this.activatedRoute.snapshot.params['movieId'];
    this.findMovieById(this.theMovieId);
    this.getAllReviews(this.theMovieId);
  }


  findMovieById(theMovieId: number) {
    this.homeActivityService.getMovieById(theMovieId).subscribe(
        (response) => {
          this.selectedMovie.movieName = response.movieName;
          this.selectedMovie.movieDescription = response.movieDescription;
          this.selectedMovie.movieReleaseDate = response.movieReleaseDate;
          this.selectedMovie.movieDirector = response.movieDirector;
          this.selectedMovie.movieGenre = response.movieGenre;
          this.selectedMovie.movieLanguage = response.movieLanguage;
          this.selectedMovie.duration = response.duration;
          this.selectedMovie.overallRate = response.overallRate;
          this.selectedMovie.imageUrl = response.imageUrl;
        },
        (error) => {
          console.log("Error: ", error);
        }
      )
  }

  reviews: Rating[] = [];

  getAllReviews(theMovieId: number) {
    this.homeActivityService.getAllReviews(theMovieId).subscribe(
      (response) => {
          this.reviews = Array.isArray(response) ? response : [response];
          console.log(this.reviews);
      },
      (error) => {
        console.log(error);
      }
    )

  }

  displayTheReviews() {

  }

  reviewMessage: string = '';
  starValue: number = 0;

  submitReview() {
    console.log(this.reviewMessage);
    console.log(this.starValue);
  }

  clearAllData() {
    this.reviewMessage = '';
    this.starValue = 0;
  }

  // userReviews = [
  //   { username: 'JohnDoe', review: 'Great movie!' },
  //   { username: 'JaneSmith', review: 'Highly recommended.' },
    
  // ];

 
}


