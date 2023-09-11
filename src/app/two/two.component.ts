import { Component, OnInit } from '@angular/core';
import { AllServerService } from '../all-server.service';
import { ActivatedRoute} from '@angular/router';
import { onePost } from '../one-post.resolver';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  constructor(public activatedRoute: ActivatedRoute){}


  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data);
  }


}
