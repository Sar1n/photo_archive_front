import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class AddpostService {

  constructor(private http: HttpClient) { }

  NewPost(post: Post){
    const body = {Content: post.Content, Title: post.Title, Description: post.Description};
    console.log(body);
    return this.http.post('https://localhost:44348/api/post', body);
  }
}
