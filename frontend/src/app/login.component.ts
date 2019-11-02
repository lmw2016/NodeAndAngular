import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl:'login.component.html'
  
})
export class LoginComponent implements OnInit {

  loginData={}

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  post(){
    this.authService.loginUser(this.loginData);
  }

}
