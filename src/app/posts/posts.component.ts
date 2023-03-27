import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : any[] = [];
  constructor(private service: PostService){
    
  }

  ngOnInit(): void {
      this.service.getPosts()
      .subscribe({ next : (response : any) =>{
        this.posts = response;
      }, error : error => {
        console.log(error)
      }})
  }

  createPost(postInput: HTMLInputElement){
    let post: any = { title: postInput.value};
    postInput.value = '';
    this.service.createPost(post)
      .subscribe( (response : any) =>{
        post.id = response.id;
        this.posts.unshift(post);
      })
  }

  updatePost(post : any){
    // console.log(post.id);
    this.service.updatePost(post.id)
      .subscribe((response) => {
        console.log(response);
      })
  }

  deletPost(post : any){
    // console.log(post.id);
    this.service.deletePost(post.id)
      .subscribe((response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        // console.log(response)
      }, (error : Response) =>{
        console.log(error)
        if (error.status == 404){
          console.log('Post not Found');
        }
      })
  }
}
