import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted: boolean;
  registerMode: boolean;
  constructor(private formBuilder : FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password: ['',Validators.required]
    });
  }

  login() {
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }

   this.authService.login(this.loginForm.value).subscribe(next =>{
      console.log('Logged ');
    }, error => {
      console.log('Failed to login');
    });
  }

  changeMode(){
    this.registerMode = !this.registerMode;
  }
}
