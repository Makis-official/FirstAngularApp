import { Component } from '@angular/core';
import { AllServerService } from './service/all-server.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';

  constructor(private allPost: AllServerService) {

  }


  getPosts() {
    this.allPost.getAllPosts().subscribe({
      next: (value) => {console.log(value)}
    })
  };

  getComments() {
    this.allPost.getOneComments().subscribe({
      next: (value) => {console.log(value)}
    })
  }

  postSub() {
    this.allPost.postBody().subscribe({
      next: (value) => {console.log(value)}
    })
  }

  onePost() {
    this.allPost.getOnePost().subscribe({
      next: (value) => {console.log(value)},
      error: (err: HttpErrorResponse) => {
        if(err.status === 404 || err.status === 401 || err.status === 502)
        {
          console.log('Error server');
        }
      }
    })
  }

  postWithHeader() {
    this.allPost.headPosts().subscribe({
      next: (value) => {console.log(value)}
    })
  }

  DeletePost() {
    this.allPost.deleteOnePost().subscribe({
      next: (value) => {console.log(value)}
    })
  }

}
