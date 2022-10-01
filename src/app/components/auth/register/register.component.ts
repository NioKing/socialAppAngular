import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    confirmPassword: new FormControl('', [Validators.required]),
    country: new FormControl(null),
    dateOfBirth: new FormControl(null)
  })

  ngOnInit(): void {
  }


  onSignUp() {
    console.log(this.registerForm.value)
    
  }

}
