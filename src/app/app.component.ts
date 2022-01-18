import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

type post = {
  title: string,
  body: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular News';
  nomes = ['Lucas', 'Mateus', 'Gabriel', 'Amanda'];
  postsList: any;
  
  constructor( private posts: PostsService ) {}

  ngOnInit() {
    this.posts.getPosts().subscribe(
      data => {
        console.log(data);
        this.postsList = data;
      }
    )
  }
}
