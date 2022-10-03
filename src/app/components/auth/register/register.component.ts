import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gql } from 'apollo-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    // confirmPassword: new FormControl('', [Validators.required]),
    country: new FormControl(null),
    dateOfBirth: new FormControl(null)
  })

  ngOnInit(): void {
  }


  onSignUp() {
    let { email, password, country, dateOfBirth } = this.registerForm.value
    this.authService.signUp(email!, password!, country!, dateOfBirth!).subscribe((val: any) => {
      let user = val.data?.createUser
      if(user) {
        this.router.navigate(['login'])
      }
    })
  }

}
