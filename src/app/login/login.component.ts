import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
  hide = true;
  submitted= false;

  constructor(
    private fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  onSubmit(){
    if ( !this.loginForm.valid ) return;
    if ( this.loginForm.valid ) {
      this.router.navigate(['home'])
    }
  }
}
