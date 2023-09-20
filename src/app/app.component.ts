import { Component } from '@angular/core';
import { PostsService } from "./posts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public serv: PostsService) {}

  admin() {
    this.serv.role = 'admin';
  }

  user() {
    this.serv.role = 'user';
  }


}
