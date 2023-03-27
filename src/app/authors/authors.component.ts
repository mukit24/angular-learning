import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors;
  task:any = {
    name: 'test Task',
  };
  onAdd(){
    this.authors.push('New Author');
  }
  
  constructor(service: AuthorsService){
    this.authors = service.getAuthors();
  }
}
