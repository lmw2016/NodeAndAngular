import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'register',
  templateUrl:'register.component.html'
  
})
export class RegisterComponent implements OnInit {

  registerData={}

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  post(){
    console.log(this.registerData);
    this.apiService.sendUserRegisterData(this.registerData);
  }

}
