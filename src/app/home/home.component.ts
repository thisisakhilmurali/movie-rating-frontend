import { Router } from '@angular/router';
import { UserAuthService } from '../__services/user-auth.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { HomeActivityService } from '../__services/home-activity.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isNavbarWhite: boolean = false;

  ngOnInit() {
    this.checkNavbarBackground();
    this.getMoviesByGenre('Action');
    this.getMoviesByGenre('Horror');
    this.getMoviesByGenre('Comedy');
    this.getMoviesByGenre('Animated');
    this.getMoviesByGenre('Fantasy');
    this.getMoviesByGenre('Romance');
    this.getMoviesByGenre('Thriller');
    this.getMoviesByGenre('Sci-Fi');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkNavbarBackground();
  }

  private checkNavbarBackground() {
    const carouselHeight = document.querySelector('.carousel-container')?.clientHeight || 0;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isNavbarWhite = scrollPosition > carouselHeight;
  }

  constructor(
    private userAuthService: UserAuthService, 
    private router: Router,
    private homeActivityService: HomeActivityService
    ) { }


    /*

    private userService: UserService

    public getUserService(): UserService {
    return this.userService;
    }

    <a *ngIf="getUserService().roleMatch(['Admin'])"> </a>
    <a *ngIf="getUserService().roleMatch(['User'])"> </a>

    */

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logOut() {
    this.userAuthService.clearAllTraces();
    this.router.navigate(['/home'])
  }


  selectedOption: string = 'name';
  searchValue: string = '';
  searchPlaceholder: string = 'Enter a movie name';


  search() {
    if (this.selectedOption === 'name') {
      this.router.navigate(['search', this.searchValue]);
    } else if (this.selectedOption === 'date') {
      this.router.navigate(['search/date', this.searchValue]);
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



  // Movie Get By Genre

  actionMovies: Movie[] = [];
  horrorMovies: Movie[] = [];
  comedyMovies: Movie[] = [];
  animatedMovies: Movie[] = [];
  fantasyMovies: Movie[] =[];
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

}