import { Injectable } from "@angular/core";

export class Post {
    constructor(
        public Id: number,
        public Content: string,
        public Title: string,
        public Description: string
      ) {}
}


@Injectable({
    providedIn: "root",
})
export class PostAdapter {
    adapt(item: any): Post {
        return new Post(item.Id, item.Content, item.Title, item.Description);
    }
}