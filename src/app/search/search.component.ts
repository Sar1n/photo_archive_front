import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  id: number;

  constructor() { }

  ngOnInit(): void {
  }

  ViewButtonClick()
  {
    console.log(this.id);
  }

}
