import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'register',
  templateUrl:'register.component.html'
  
})
export class RegisterComponent implements OnInit {

  registerData={}

  message

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  post(){
    //console.log(this.registerData);
    this.authService.registerUser(this.registerData).subscribe(res=>{
       this.message=res["message"];  
    });
  }

}
