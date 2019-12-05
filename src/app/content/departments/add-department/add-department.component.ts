import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  newDepartForm : FormGroup;
  constructor(private formBuilder : FormBuilder,
              private http: DepartmentsService) { }

  ngOnInit() {
    this.newDepartForm = this.formBuilder.group({
      name:['Nazwa', ],
      phoneNumber: ['Numer telefonu',],
      description: ['Opis', ]
  })

  }

  addDepart()
  {
    this.http.addDepartment(this.newDepartForm.value).subscribe(()=>console.log("success"), ()=>console.log("error"))
    console.log("dodaję");
  }
}
