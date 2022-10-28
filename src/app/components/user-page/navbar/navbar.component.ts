import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  constructor(
    private router: Router
  ) { }

  email: string = ''
  @Input() user!: User
   

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.email = changes['user'].currentValue?.email
  }
  
  logout() {
    localStorage.removeItem("token_id")
    this.router.navigate([''])
  }

}
