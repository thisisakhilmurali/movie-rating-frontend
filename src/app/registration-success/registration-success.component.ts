import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../__services/user-auth.service';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.css']
})
export class RegistrationSuccessComponent implements OnInit{

  constructor(
    private userAuthService: UserAuthService
    ) { }

  nameOfUser: string | null = '';

  ngOnInit(): void {
    this.nameOfUser = this.userAuthService.getName();
  }



}
