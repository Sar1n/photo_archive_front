import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Post, PostAdapter } from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class GetpostsService {

  url: string;

  constructor(private http: HttpClient, private adapter: PostAdapter) { }

  GetAll(): Observable<Post[]>{
    return this.http.get('https://localhost:44348/api/post').pipe( map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
  }

  GetSome(searchstring: string): Observable<Post[]>{
    this.url = 'https://localhost:44348/api/post' + '?searchstring=' + searchstring;
    return this.http.get(this.url).pipe( map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
  }

  GetOne(id: number): Observable<Post>{
    this.url = 'https://localhost:44348/api/post' + '?id=' + id;
    return this.http.get(this.url).pipe( map((data: any) => this.adapter.adapt(data)));
  }
}
