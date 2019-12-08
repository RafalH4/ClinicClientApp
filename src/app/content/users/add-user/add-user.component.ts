import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm : FormGroup;
  model: any = {};

  formErrors = {
    firstname: '',
    lastname: ''
  }
  
  constructor(private formBuilder : FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
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
      password2: ['', Validators.required],
      role: ['Wybierz rodzaj konta', Validators.required]
    }); 
  }

  register() {
    console.log(this.addUserForm.value);
    this.authService.register(this.addUserForm.value).subscribe(() =>{
      console.log('registration successful');
    },error => {
      console.log(error);
    });
  } 

  cancel() {
    console.log('cancelled');
  }

}
