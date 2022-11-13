import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FriendsComponent } from '../friends/friends.component';
import { DataService } from '../services/data.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  getClick() {
    this.dataService.sendClickEvent()
  }

  getFriends() {
    this.dialog.open(FriendsComponent, {
      width: '500px'
    })
  }

  getSettings() {
    this.dialog.open(SettingsComponent, {
      width: '500px'
    })
  }
}
