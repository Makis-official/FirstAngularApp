import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { Post } from './interface/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'FirstAngularApp';

  users: Post[] = [];

  constructor(public dataService:DataService) {}

  ngOnInit(): void {
    this.dataService.todos().subscribe({
      next: (resp: Post[]) => {
        this.users = resp;
        console.log(this.users);
      }
    }); 
  };

}