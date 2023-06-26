import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  movieName: string = '';
  movieDate: string = '';

  ngOnInit(): void {
    
    this.movieName = this.activatedRoute.snapshot.params['movieName'];
    this.movieDate = this.activatedRoute.snapshot.params['movieDate'];

    this.check()
    
  }

  check() {
    if(this.movieName != null) {
      console.log("Movie Name: " + this.movieName);
      this.addToHTML(this.movieName);
    } else if (this.movieDate != null) {
      this.addToHTML(this.movieDate);
      console.log("Movie Date: " + this.movieDate);
    }
  }

  addToHTML(searchTerm: string) {
    const spanElement: any = document.getElementById('searchTerm');
    const titleText = document.createTextNode(searchTerm);
    spanElement.appendChild(titleText);

  }

  


}
