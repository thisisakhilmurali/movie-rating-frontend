import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {


  redirectToHomePage(): void {
    window.location.href = "/home"; // Replace "/homepage" with the actual URL of your homepage
  }


}
