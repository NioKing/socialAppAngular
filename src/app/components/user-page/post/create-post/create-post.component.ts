import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  postForm = new FormGroup({
    text: new FormControl('', [Validators.required])
  })

  ngOnInit() {
  }

  onSubmit() {
    const text = String(this.postForm.value.text)
    this.dataService.createPost(text)
  }

}
