import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postData: any;
  id: any;

  constructor(
    private post: PostsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.id = queryParams.id
      }
    )

    this.post.getSinglePost(this.id).subscribe(
      data => {
        this.postData = data;
        console.log(data);
      }
    )
  }

}
