import { Component, OnInit } from '@angular/core';
import { GetpostsService } from '../getposts.service';
import { Post } from "../post.model";
import { Observable } from "rxjs";
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
  providers: [GetpostsService]
})
export class ArchiveComponent implements OnInit {

  posts: Post[] = [];
  postsbyfour: Post[][] = [];
  postsJson: string;
  counter: number;
  rows: number;

  searchstring: string;

  constructor(private getpostsService: GetpostsService) { }

  ByFour(){
    this.posts.forEach(element => {
      console.log(element.Title);
    });


    this.postsbyfour.push([]);
    this.counter = 0;
    this.rows = 0;
    this.posts.forEach(post => {
      this.postsbyfour[this.rows].push(post);
      this.counter = this.counter + 1;
      if (this.counter == 4)
      {
        this.rows = this.rows + 1;
        this.postsbyfour.push([]);
        this.counter = 0;
      }
    });
  }

  ShowAll(){
    this.postsbyfour = [];
    this.getpostsService.GetAll().subscribe( data => {this.posts=data.reverse(); this.ByFour();} );
  }

  ShowSome(){
    this.postsbyfour = [];
    this.getpostsService.GetSome(this.searchstring).subscribe( data => {this.posts=data.reverse(); this.ByFour();} );
  }

  ViewItem(event){
    var target = event.currentTarget;//event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    
  }

  ngOnInit(): void {
    this.ShowAll();
  }

}
