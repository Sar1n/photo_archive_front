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

  buttonshow = false;

  content: string;
  title: string;
  description: string;

  imgdisplay: any;

  image: File;
  

  post: Post = new Post(null, null, null, null);

  constructor(private addPostService: AddpostService) { }

  PostButtonHide(){
    return this.buttonshow;
  }

  Loadhref(input: string){
    this.content = input;
  }

  ButtonClick(){
    this.post.Content = this.imgdisplay;
    this.post.Title = this.title;
    this.post.Description = this.description;
    this.addPostService.NewPost(this.post).subscribe(error => console.log(error));
  }

  processFile(event){
    if (event.target.files && event.target.files[0]){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.imgdisplay = event.target.result;
      }
      this.buttonshow = true;
    }
}

  ngOnInit(): void {
  }

}
