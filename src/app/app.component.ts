import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: Post[] = [];

  constructor(public dataService:DataService){
  }

  ngOnInit(): void {
    this.dataService.todos().subscribe({
      next: (resp: Post[]) => {
        this.users = resp;
        console.log(this.users);
      }
    });

    
  }

 title = 'FirstAngularApp';
}