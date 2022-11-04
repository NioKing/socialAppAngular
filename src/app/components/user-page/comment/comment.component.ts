import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  posts!: Post
  

  constructor() { }
  
  

  ngOnInit() {
  }

}
