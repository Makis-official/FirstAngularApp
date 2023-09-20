import { Component, OnInit} from '@angular/core';
import { PostsService } from "../posts.service";
import { Person } from "../person";
import { ActivatedRoute } from '@angular/router';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit{
  constructor(private serv: PostsService, private route: ActivatedRoute) {}

  people: Person | undefined;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    // console.log(id);
    this.people =  this.serv.person.find(x => x.id == id);
    // console.log(this.people);
  }

  save() {
    console.log(this.people);
    Notify.success('Новые данные сохранены и выведены в консоль!');
  }
}
