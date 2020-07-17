import { Component, OnInit } from '@angular/core';
import { compileComponentFromMetadata } from '@angular/compiler';
import { AddpostService } from '../addpost.service';
import { Post } from "../post.model";

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
  providers: [AddpostService]
})
export class NewpostComponent implements OnInit {

  content: string;
  title: string;
  description: string;

  post: Post = new Post(null, null, null, null);

  constructor(private addPostService: AddpostService) { }

  Loadhref(input: string){
    this.content = input;
  }

  ButtonClick(){
    console.log(this.content);
    console.log(this.title);
    console.log(this.description);
    this.post.Content = this.content;
    this.post.Title = this.title;
    this.post.Description = this.description;
    this.addPostService.NewPost(this.post).subscribe(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
