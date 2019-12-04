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
      console.log("USER:");
      console.log(this.user)
    })
  }

  editUser() {
    console.log(this.user);
    this.editMode=true;
    this.editForm = this.formBuilder.group({
      id:[this.user.id],
      firstName: [this.user.firstName,Validators.required],
      secondName: [this.user.secondName, Validators.required],
      pesel: [this.user.pesel, Validators.required],
      postCode: [this.user.postCode, Validators.required],
      city: [this.user.city, Validators.required],
      street: [this.user.street, Validators.required],
      houseNumber: [this.user.houseNumber, Validators.required],
      phoneNumber: [this.user.phoneNumber, Validators.required],
      email: [this.user.email, Validators.required],
  
    }); 
  }
  closeEdit() {
    this.editMode=false;
  }
  saveUser() {

    console.log(this.editForm.value);
    this.http.updateUser(this.editForm.value).subscribe(res => console.log(res));
  }


}
