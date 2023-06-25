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


  login(loginForm: NgForm) {
    this.isSubmitting = true;
    this.userService.login(loginForm.value).subscribe(
      (response: any) =>  {

        this.userAuthService.setRole(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        
        const role = response.user.role[0].roleName;
        
        if(role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }

      },
      (error) => {
        this.isSubmitting = false;
        console.log(error.error.errors);
      }
    );
  }


  signUp(signUpForm: NgForm) {
    this.isSubmitting = true;
    this.userService.register(signUpForm.value).subscribe(
      (response: any) => {
        console.log("Registration Successful");
      },
      (error) => {
        this.isSubmitting = false;
        console.log(error.error.errors);
      }
    );
  }


}
