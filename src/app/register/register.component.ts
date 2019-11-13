import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  
  modelForm : FormGroup;

  formErrors = {
    firstname: '',
    lastname: ''
  }

  private validationMessages = {
    firstName: {
      required: 'firstname is required'
    },
    secondName: {
      required: 'lastname is required',
      minlength: 'lastname must have at least 3 characters'
    }
  }
  constructor(private formBuilder : FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      secondName: ['', [Validators.required, Validators.minLength(3)]],
      pesel: ['', Validators.required],

      postCode: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],

      email: ['', Validators.email],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    }); 
  }
  register() {
    this.authService.register(this.modelForm.value).subscribe(() =>{
      console.log('registration successful');
    },error => {
      console.log(error);
    });
  } 

  cancel() {
    console.log('cancelled');
  }
  

}
