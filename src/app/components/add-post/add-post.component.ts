import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post: any;
  response: Object = {};
  textResponse = '';

  constructor(private http: PostsService) { }

  ngOnInit(): void {
    this.post = {}
    this.response = {title: '', body: ''}
  }

  public addPost(frm: NgForm) {
    this.http.addPost(this.post).subscribe(response => {
      this.response = response;
      console.log(response)
      frm.reset();
    })
  }

}
