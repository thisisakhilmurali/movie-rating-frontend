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


// thrillermovieGroups: any[] = [
//   [
//     { title: 'Movie 1', image: '../../assets/moviess1.jpg', rating: 4.5 },
//     { title: 'Movie 2', image: '../../assets/moviess2.jpg', rating: 3.8 },
//     { title: 'Movie 3', image: '../../assets/moviess3.jpg', rating: 4.2 },
//     { title: 'Movie 4', image: '../../assets/moviess4.jpg', rating: 4.0 },
//     { title: 'Movie 5', image: '../../assets/moviess5.jpg', rating: 3.5 }
//   ],
//   [
//     { title: 'Movie 6', image: '../../assets/moviess6.jpg', rating: 4.7 },
//     { title: 'Movie 7', image: '../../assets/moviess7.jpg', rating: 3.9 },
//     { title: 'Movie 8', image: '../../assets/moviess8.jpg', rating: 4.1 },
//     { title: 'Movie 9', image: '../../assets/moviess9.jpg', rating: 4.3 },
//     { title: 'Movie 10', image: '../../assets/moviess10.jpg', rating: 4.6 }
//   ],
//   [
//     { title: 'Movie 11', image: '../../assets/moviess11.jpg', rating: 5 },
//     { title: 'Movie 12', image: '../../assets/moviess12.jpg', rating: 3.9 },
//     { title: 'Movie 13', image: '../../assets/moviess13.jpg', rating: 4.8 },
//     { title: 'Movie 14', image: '../../assets/moviess14.jpg', rating: 4.9 },
//     { title: 'Movie 15', image: '../../assets/moviess15.jpg', rating: 4.6 }
//   ]
  
// ];


}