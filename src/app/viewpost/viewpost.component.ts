import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { GetpostsService } from '../getposts.service';
import { Post } from "../post.model";
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  private routeSub: Subscription;
  id: number;
  PagePost: Post;
  constructor(private route: ActivatedRoute, private getpostsService: GetpostsService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
    });
    this.getpostsService.GetOne(this.id).subscribe( data => { this.PagePost=data; } );
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
