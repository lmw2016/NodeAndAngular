import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html"
})
export class MessagesComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    var userId=this.route.snapshot.params.id;
    this.apiService.getMessages(userId).subscribe(data => {
      this.posts = data;
      //console.log(this.posts);
    });
  }
}
