import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  param: string = "";
  user : User = new User();
  editMode: boolean = false;
  editForm : FormGroup;
  constructor(private route: ActivatedRoute, 
              private http: UsersService, 
              private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.forEach(({params}:Params)=>{
    this.param = params['id']
  })

  this.http.getUserById(this.param).subscribe((data : User)=>{
    this.user = data;
  })

  this.editForm = this.formBuilder.group({
    firstName: [this.user.firstName, [Validators.required, Validators.minLength(3)]],
    secondName: ['', [Validators.required, Validators.minLength(3)]],
    pesel: ['', Validators.required],

    postCode: ['', Validators.required],
    city: ['', Validators.required],
    street: ['', Validators.required],
    houseNumber: ['', Validators.required],
    phoneNumber: ['', Validators.required],

    email: ['', Validators.email],

  }); 


  }

  editUser() {
    this.editMode=true;
  }
  closeEdit() {
    this.editMode=false;
  }


}
