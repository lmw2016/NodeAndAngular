import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
   PSSocial
   <span style="flex:1 1 auto"></span>
   <button mat-button routerLink="/register">Register</button>
   <button mat-button routerLink="/users">All Users</button>
   </mat-toolbar>
   <router-outlet><router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my frontend';
  constructor(private apiService:ApiService){}
  messages:any[]=[];

  ngOnInit(){
    this.apiService.getMessages().subscribe(data=>{
      this.messages=data;
      console.log(this.messages);
    });
    //this.apiService.getMessagesWithSub();
  }
}
