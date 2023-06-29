import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieWithPoster } from '../model/movieWithPoster';
import { HomeActivityService } from '../__services/home-activity.service';
import { MovieService } from '../__services/movie.service';
import { UserAuthService } from '../__services/user-auth.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  isNavbarWhite: boolean = false;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private homeActivityService: HomeActivityService,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.checkNavbarBackground();
    this.getTheMovies();
  }


  getTheMovies() {
    this.getMoviesByGenre('Action');
    this.getMoviesByGenre('Horror');
    this.getMoviesByGenre('Comedy');
    this.getMoviesByGenre('Animated');
    this.getMoviesByGenre('Fantasy');
    this.getMoviesByGenre('Romance');
    this.getMoviesByGenre('Thriller');
    this.getMoviesByGenre('Sci-Fi');
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.singleMovie.imageUrl = file;
  }

  isModalOpen = false;

  singleMovie: MovieWithPoster = new MovieWithPoster();

  addMovie(movieForm: NgForm) {
    console.log(movieForm.value);

    this.singleMovie.movieName = movieForm.value.movieName;
    this.singleMovie.movieDirector = movieForm.value.movieDirector;
    this.singleMovie.movieGenre = movieForm.value.movieGenre;
    this.singleMovie.movieReleaseDate = movieForm.value.movieReleaseDate;
    this.singleMovie.movieLanguage = movieForm.value.movieLanguage;
    this.singleMovie.duration = movieForm.value.duration;
    this.singleMovie.description = movieForm.value.description;
    this.singleMovie.overallRate = 0;

    console.log(this.singleMovie.imageUrl);


    this.movieService.addMovie(this.singleMovie).subscribe(
      () => {
        console.log('Movie added successfully');
        this.getTheMovies();
      },
      (error) => {
        console.error('Failed to add movie', error);
      }
    );
    this.closeModal();
  }

  openAddMovieForm() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


  logout(): void {
    // window.location.href = "/home";
    this.userAuthService.clearAllTraces();
    this.router.navigate(['/home'])
  }


  // Movies Accessing from Backend
  actionMovies: Movie[] = [];
  horrorMovies: Movie[] = [];
  comedyMovies: Movie[] = [];
  animatedMovies: Movie[] = [];
  fantasyMovies: Movie[] = [];
  romanticMovies: Movie[] = [];
  scifiMovies: Movie[] = [];
  thrillerMovies: Movie[] = [];

  getMoviesByGenre(genre: string) {
    this.homeActivityService.getMoviesByGenre(genre).subscribe(
      movies => {
        switch (genre) {
          case 'Action':
            this.actionMovies = movies;
            break;
          case 'Horror':
            this.horrorMovies = movies;
            break;
          case 'Comedy':
            this.comedyMovies = movies;
            break;
          case 'Animated':
            this.animatedMovies = movies;
            break;
          case 'Fantasy':
            this.fantasyMovies = movies;
            break;
          case 'Romance':
            this.romanticMovies = movies;
            break;
          case 'Sci-Fi':
            this.scifiMovies = movies;
            break;
          case 'Thriller':
            this.thrillerMovies = movies;
            break;
        }
      },
      error => {
        console.error(error);
      }
    );
  }



  // Navbar scrolling
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkNavbarBackground();
  }

  private checkNavbarBackground() {
    const carouselHeight = document.querySelector('.carousel-container')?.clientHeight || 0;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isNavbarWhite = scrollPosition > carouselHeight;
  }


  // Search Option
  selectedOption: string = 'name';
  searchValue: string = '';
  searchPlaceholder: string = 'Enter a movie name';


  search() {
    if (this.selectedOption === 'name') {
      console.log('Searching by name:', this.searchValue);
    } else if (this.selectedOption === 'date') {
      console.log('Searching by date:', this.searchValue);
    }
  }

  onSelectedOptionChange() {
    this.searchValue = ''; // Clear the search field
    if (this.selectedOption === 'name') {
      this.searchPlaceholder = 'Enter a movie name';
    } else if (this.selectedOption === 'date') {
      this.searchPlaceholder = 'Enter a date';
    }
  }


}