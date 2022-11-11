import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  postForm = new FormGroup({
    text: new FormControl('', [Validators.required])
  })

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.postForm.value.text)
  }

}
