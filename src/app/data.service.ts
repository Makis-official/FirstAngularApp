import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  todos(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
