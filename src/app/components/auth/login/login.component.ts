import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private readonly authService: AuthService,
    public loadindService: LoadingService
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })  


  ngOnInit(): void {
  }

  onLogin() {
    let {email, password} = this.loginForm.value
    this.authService.signIn(email!, password!).subscribe(async(val: any) => {
      let token = await val.data?.login?.access_token
      if(token) {
        localStorage.setItem('token_id', token)
        this.router.navigate(['home'])
      }
    })
  }

  singUp() {
    this.router.navigate(['register'])
  }
  
}
