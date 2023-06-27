import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../__services/user.service';
import { UserAuthService } from '../__services/user-auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit{

  constructor(
    private userService: UserService,
    private router: Router,
    private userAuthService: UserAuthService
    ){ }


  ngOnInit(): void {
    
  }

  // to check whether the user has entered all the fields
  isSubmitting: boolean = false;

  // message to user when the login happens
  successMessage: string = '';


  // user login
  login(loginForm: NgForm) {

    this.isSubmitting = true;

    this.userService.login(loginForm.value).subscribe(

      (response: any) =>  {

        // setting the username and name of the user to local storage
        this.userAuthService.setUserName(response.user.userName);
        this.userAuthService.setName(response.user.userFirstName + " " + response.user.userLastName);

        // setting the role and token to local storage
        this.userAuthService.setRole(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        
        // getting the role from response
        const role = response.user.role[0].roleName;
        
        // if role is admin, then redirect to admin dashboard
        if(role === 'Admin') {

          this.successMessage = "Login Successful!";
          this.displayResponseAlertForLogin(this.successMessage, 'alert-success');

          setTimeout(() => {
            this.router.navigate(['/admin']);
          }, 700);

        } else {

          this.successMessage = "Login Successful!";
          this.displayResponseAlertForLogin(this.successMessage, 'alert-success');

          setTimeout(() => {
            this.router.navigate(['/user']);
          }, 700);

        }

      },

      (error) => {

        this.isSubmitting = false;
        this.successMessage = "Invalid Credentials!";
        this.displayResponseAlertForLogin(this.successMessage, 'alert-danger');

      }
    );
  }

  // creating an elemet to store the error message 
  displayResponseAlertForLogin(message: string, successClass: string) {

    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', successClass);
    alertDiv.textContent = message;
  
    const container: any = document.getElementById('alertContainer');
  
    container.appendChild(alertDiv);

    // setting the timeout once the elemene displayed
    setTimeout(function() {
      var alertContainer: any = document.getElementById("alertContainer");
      alertContainer.innerHTML = ""; 
    }, 2000); 
    
  }


  
  // user registration method
  signUp(signUpForm: NgForm) {

    this.isSubmitting = true;

    this.userService.register(signUpForm.value).subscribe(

      (response: any) => {

        this.userAuthService.setUserName(response.userName);
        this.userAuthService.setName(response.userFirstName + " " + response.userLastName);
        this.router.navigate(['/success'])

      },

      (error) => {

        this.isSubmitting = false;
        console.log(error.error.errors);
        
      }
    );
  }


}
