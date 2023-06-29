import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-movie-component',
  templateUrl: './admin-movie-component.component.html',
  styleUrls: ['./admin-movie-component.component.css']
})
export class AdminMovieComponentComponent {

    constructor(private router: Router) {}
  
    confirmDelete() {
      this.router.navigate(['/admin-dash']);
    }
  
   
  }
  

