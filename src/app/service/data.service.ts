import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  todos() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/todos');
  };

}
