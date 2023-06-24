import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../__services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private userAuthService: UserAuthService, 
    private router: Router
    ) { }


    /*

    private userService: UserService

    public getUserService(): UserService {
    return this.userService;
    }

    <a *ngIf="getUserService().roleMatch(['Admin'])"> </a>
    <a *ngIf="getUserService().roleMatch(['User'])"> </a>

    */

  ngOnInit(): void {
    
  }

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



actionmovieGroups: any[] = [
  [
    { title: 'Movie 1', image: '../../assets/movie1.jpg', rating: 4.5 },
    { title: 'Movie 2', image: '../../assets/movie2.jpg', rating: 3.8 },
    { title: 'Movie 3', image: '../../assets/movie3.jpg', rating: 4.2 },
    { title: 'Movie 4', image: '../../assets/movie4.jpg', rating: 4.0 },
    { title: 'Movie 5', image: '../../assets/movie5.jpg', rating: 3.5 }
  ],
  [
    { title: 'Movie 6', image: '../../assets/movie6.jpg', rating: 4.7 },
    { title: 'Movie 7', image: '../../assets/movie7.jpg', rating: 3.9 },
    { title: 'Movie 8', image: '../../assets/movie8.jpg', rating: 4.1 },
    { title: 'Movie 9', image: '../../assets/movie9.jpg', rating: 4.3 },
    { title: 'Movie 10', image: '../../assets/movie10.jpg', rating: 4.6 }
  ],
  [
    { title: 'Movie 11', image: '../../assets/movie11.jpg', rating: 5 },
    { title: 'Movie 12', image: '../../assets/movie12.jpg', rating: 3.9 },
    { title: 'Movie 13', image: '../../assets/movie13.jpg', rating: 4.8 },
    { title: 'Movie 14', image: '../../assets/movie14.jpg', rating: 4.9 },
    { title: 'Movie 15', image: '../../assets/movie15.jpg', rating: 4.6 }
  ]
  
];





comedymovieGroups: any[] = [
  [
    { title: 'Movie 1', image: '../../assets/movies1.jpg', rating: 4.5 },
    { title: 'Movie 2', image: '../../assets/movies2.jpg', rating: 3.5 },
    { title: 'Movie 3', image: '../../assets/movies3.jpg', rating: 4.2 },
    { title: 'Movie 4', image: '../../assets/movies4.jpg', rating: 4.0 },
    { title: 'Movie 5', image: '../../assets/movies5.jpg', rating: 3.5 }
  ],
  [
    { title: 'Movie 6', image: '../../assets/movies6.jpg', rating: 4.7 },
    { title: 'Movie 7', image: '../../assets/movies7.jpg', rating: 3.9 },
    { title: 'Movie 8', image: '../../assets/movies8.jpg', rating: 4.1 },
    { title: 'Movie 9', image: '../../assets/movies9.jpg', rating: 4.3 },
    { title: 'Movie 10', image: '../../assets/movies10.jpg', rating: 4.6 }
  ],
  [
    { title: 'Movie 11', image: '../../assets/movies11.jpg', rating: 5 },
    { title: 'Movie 12', image: '../../assets/movies12.jpg', rating: 3.9 },
    { title: 'Movie 13', image: '../../assets/movies13.jpg', rating: 4.8 },
    { title: 'Movie 14', image: '../../assets/movies14.jpg', rating: 4.9 },
    { title: 'Movie 15', image: '../../assets/movies15.jpg', rating: 4.6 }
  ]
  
];




horrormovieGroups: any[] = [
  [
    { title: 'Movie 1', image: '../../assets/moviess1.jpg', rating: 4.5 },
    { title: 'Movie 2', image: '../../assets/moviess2.jpg', rating: 3.8 },
    { title: 'Movie 3', image: '../../assets/moviess3.jpg', rating: 4.2 },
    { title: 'Movie 4', image: '../../assets/moviess4.jpg', rating: 4.0 },
    { title: 'Movie 5', image: '../../assets/moviess5.jpg', rating: 3.5 }
  ],
  [
    { title: 'Movie 6', image: '../../assets/moviess6.jpg', rating: 4.7 },
    { title: 'Movie 7', image: '../../assets/moviess7.jpg', rating: 3.9 },
    { title: 'Movie 8', image: '../../assets/moviess8.jpg', rating: 4.1 },
    { title: 'Movie 9', image: '../../assets/moviess9.jpg', rating: 4.3 },
    { title: 'Movie 10', image: '../../assets/moviess10.jpg', rating: 4.6 }
  ],
  [
    { title: 'Movie 11', image: '../../assets/moviess11.jpg', rating: 5 },
    { title: 'Movie 12', image: '../../assets/moviess12.jpg', rating: 3.9 },
    { title: 'Movie 13', image: '../../assets/moviess13.jpg', rating: 4.8 },
    { title: 'Movie 14', image: '../../assets/moviess14.jpg', rating: 4.9 },
    { title: 'Movie 15', image: '../../assets/moviess15.jpg', rating: 4.6 }
  ]
  
];





}