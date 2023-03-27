import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  createPost(post : any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(post))
  }

  updatePost(id : any){
    return this.http.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, { isUpdate: true})
  }

  deletePost(id : any){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

}
