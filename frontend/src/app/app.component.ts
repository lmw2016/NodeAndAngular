import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
  }
}
