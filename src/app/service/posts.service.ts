import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Person } from "../interface/person";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  person: Person[] = [];

  constructor(private http: HttpClient) { }

  role: 'user' | 'admin' = 'user';

  getAllUser() {
    return this.http.get<Person[]>('https://jsonplaceholder.typicode.com/posts');
  };
  
}
