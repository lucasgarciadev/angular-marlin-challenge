import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postsList: any;

  constructor(private posts: PostsService) { }

  ngOnInit(): void {
    this.posts.getPosts().subscribe(
      data => {
        console.log(data);
        this.postsList = data;
      }
    )
  }

}
