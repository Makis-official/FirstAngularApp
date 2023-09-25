import { Component, OnInit } from '@angular/core';
import { AllServerService } from '../service/all-server.service';
import { Post } from '../interface/post';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  constructor(public allServerService: AllServerService){}


  user = <Post>{};

  ngOnInit(): void {

    this.allServerService.getPostWithResolve().subscribe({
      next: (value: Post) => {
        this.user = value;
        console.log(this.user);
      }
    });
  };


}
