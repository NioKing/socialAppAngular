import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit, OnDestroy {

  constructor(
    private dataService: DataService
  ) { }

  createPostSubscription!: Subscription
  postForm = new FormGroup({
    text: new FormControl('', [Validators.required])
  })

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if(this.createPostSubscription) {
      this.createPostSubscription.unsubscribe()
    }
  }

  onSubmit() {
    const text = String(this.postForm.value.text)
    this.createPostSubscription = this.dataService.createPost(text).subscribe()
  }

}
