import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.scss']
})
export class CommentInputComponent implements OnInit {

  constructor() { }

  commentForm = new FormGroup({
    text: new FormControl('', [Validators.required, Validators.maxLength(500)])
  })

  ngOnInit() {
  }
 
  onComment() {
    console.log(this.commentForm.value.text)
    this.commentForm.reset()
  }

}
