import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl:'login.component.html'
  
})
export class LoginComponent implements OnInit {

  loginData={}

  get isAuthenticated(){
     return this.authService.isAuthenticated;
  }

  constructor(private authService: AuthService, private router:Router) { }
  
  ngOnInit() {
  }

  login(){
    this.authService.loginUser(this.loginData).subscribe(res=>{
      localStorage.setItem('token', res.token);
      if(this.isAuthenticated)
         this.router.navigate(['/users'])
    });
  }

}
