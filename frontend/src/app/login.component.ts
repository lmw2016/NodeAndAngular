import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl:'login.component.html'
  
})
export class LoginComponent implements OnInit {

  loginData={}

  constructor(private authService: AuthService, private router:Router) { }
  
  ngOnInit() {
  }

  login(){
    this.authService.loginUser(this.loginData).subscribe(res=>{
      localStorage.setItem('token', res.token);
      if(this.authService.isAuthenticated)
         this.router.navigate(['/users'])
    });
  }

}
