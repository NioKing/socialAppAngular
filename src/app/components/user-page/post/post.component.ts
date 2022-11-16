import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
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
  @Input() user!: User

  ngOnInit() {
    this.clickEventSubscription = this.dataService.getClickEvent().subscribe(() => {
      this.createPost()
    })
  }

  ngOnDestroy(): void {
    this.clickEventSubscription.unsubscribe()
  }

  createPost() {
    this.dialog.open(CreatePostComponent, {
      width: '500px'
    })
    console.log(this.user.posts)
    

  }


}
