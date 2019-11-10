import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  postMsg=''
  
  message

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  
  post(){
      this.apiService.postMessage(this.postMsg).subscribe(res=>{
           this.message=res.message
      })
  }
}
