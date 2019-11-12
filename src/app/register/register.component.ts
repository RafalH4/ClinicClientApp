import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  
  modelForm : FormGroup;formErrors ={
    firstName:'',
    lastName:''
  }

  private validationMessages = {
    firstName : {
      required : "firstName is required"
    },
    lastName : {
      required : "lastName is required",
      maxLength: "lastName must have at least 6 characters"
    }
  }

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      pesel: ['', Validators.required],

      postCode: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],

      email: ['', Validators.email],
      password: ['', Validators.required],
      password2: ['', Validators.required],

    });
  }

  onControlValueChanged() {
    const form = this.modelForm;

    for(let field in this.formErrors) {
      this.formErrors[field] ='';
      let  control = form.get(field);

      
    }
  }
  register() {
    console.log("Hello");
    console.log(this.model);
  }
  cancel() {
    console.log('cancelled');
  }
  

}
