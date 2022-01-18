import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  SERVER_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  public getPosts() {
    return this.http.get(`${this.SERVER_URL}/posts`);
  }

  public getSinglePost(id: number) {
    return this.http.get(`${this.SERVER_URL}/posts/${id}`);
  }

  public addPost(post: any) {
    return this.http.post(`${this.SERVER_URL}/posts`, post)
  }
}
