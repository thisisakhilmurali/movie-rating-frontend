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

  isSubmitting: boolean = false;

  successMessage: string = '';


  login(loginForm: NgForm) {
    this.isSubmitting = true;
    this.userService.login(loginForm.value).subscribe(
      (response: any) =>  {

        this.userAuthService.setUserName(response.user.userName);
        this.userAuthService.setName(response.user.userFirstName + " " + response.user.userLastName);

        this.userAuthService.setRole(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        console.log(this.userAuthService.getName());
        console.log(this.userAuthService.getUserName());

        
        const role = response.user.role[0].roleName;
        
        if(role === 'Admin') {
          this.successMessage = "Login Successful!";
          this.displayResponseAlertForLogin(this.successMessage, 'alert-success');
          setTimeout(() => {
            this.router.navigate(['/admin']);
          }, 1000);
        } else {
          this.successMessage = "Login Successful!";
          this.displayResponseAlertForLogin(this.successMessage, 'alert-success');
          setTimeout(() => {
            this.router.navigate(['/user']);
          }, 1000);
        }

      },
      (error) => {
        this.isSubmitting = false;
        this.successMessage = "Invalid Credentials!";
        this.displayResponseAlertForLogin(this.successMessage, 'alert-danger');
      }
    );
  }

  displayResponseAlertForLogin(message: string, successClass: string) {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', successClass);
    alertDiv.textContent = message;
  
    const container: any = document.getElementById('alertContainer');
  
    container.appendChild(alertDiv);

    setTimeout(function() {
      var alertContainer: any = document.getElementById("alertContainer");
      alertContainer.innerHTML = ""; 
    }, 2000); 
    
  }


  

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
