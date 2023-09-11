import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllServerService {

  constructor(private http: HttpClient) { }

  getAllPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getOneComments(){
    const parametr = new HttpParams().set('postId', '1');
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { params: parametr });
  }

  postBody(){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {'body': null});
  }

  getOnePost(){
    return this.http.get('https://jsonplaceholder.typicode.com/post');
  }

  headPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {headers: {'X-Test': '1'}, responseType: 'text'});
  }

  deleteOnePost(){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }

  getPostWithResolve(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }


}
