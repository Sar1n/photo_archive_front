import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Post, PostAdapter } from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class GetpostsService {

  constructor(private http: HttpClient, private adapter: PostAdapter) { }

  GetAll(): Observable<Post[]>{
    return this.http.get('https://localhost:44348/api/post').pipe( map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
    
  }
}
