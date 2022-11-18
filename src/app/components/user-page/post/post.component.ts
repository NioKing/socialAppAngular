import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { mergeMap, Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from '../services/data.service';
import { CreatePostComponent } from './create-post/create-post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) { }

  clickEventSubscription!: Subscription
  posts$!: Observable<Post[]>

  ngOnInit() {
    this.clickEventSubscription = this.dataService.getClickEvent().subscribe(() => {
      this.createPost()
    })
      this.getPosts()
  }

  ngOnDestroy(): void {
    this.clickEventSubscription.unsubscribe()
  }

  getPosts() {
    this.posts$ = this.dataService.getUserPosts()
  }  

  createPost() {
    this.dialog.open(CreatePostComponent, {
      width: '500px'
    })
  }


}
