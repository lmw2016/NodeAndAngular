import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html"
})
export class MessagesComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessages().subscribe(data => {
      this.posts = data;
      //console.log(this.posts);
    });
  }
}
