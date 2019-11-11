import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { componentFactoryName } from '@angular/compiler';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my frontend';
  constructor(private router:Router,private authService: AuthService){}

  ngOnInit(){
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

}
