import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MustMatch } from '../../_helpers/must-match-validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  submitted = false;
  
  modelForm : FormGroup;

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

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', Validators.required]
    },{
      validator: MustMatch('password', 'password2')
    }); 
  }
  register() {
    this.submitted = true;
    if(this.modelForm.valid)
    {
      this.authService.addNewPatient(this.modelForm.value).subscribe(() =>{
        console.log('registration successful');
      },error => {
        console.log(error);
      });
    }

  } 

  cancel() {
    console.log('cancelled');
  }
 

}
