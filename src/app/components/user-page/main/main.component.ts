import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  user!: User
  panelOpenState: boolean = false

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData() {
   this.dataService.getUserData()
   .subscribe(val => this.user = val)
  }
  

}
