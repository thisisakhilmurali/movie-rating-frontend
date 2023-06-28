import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { UserAuthService } from '../__services/user-auth.service';
import { HomeActivityService } from '../__services/home-activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

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
    this.username = this.userAuthService.getName();
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

    username: string | null = "";

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


redirectToHomePage(): void {
  const confirmation = confirm("Do you want to continue?");

  if (!confirmation) {
    return; // Logout cancelled
  }

  window.location.href = "/home";
}






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


