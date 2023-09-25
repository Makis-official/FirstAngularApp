import { Component,  OnInit} from '@angular/core';
import { PostsService } from "../service/posts.service";
import { Person } from "../interface/person";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit{

  constructor(private serv: PostsService) {}

  users: Person[] = [];

  ngOnInit(): void {
      this.serv.getAllUser().subscribe({
        next: (value: Person[]) => {
          this.users = value;
          this.serv.person = this.users;
        }
      });
  };

}
