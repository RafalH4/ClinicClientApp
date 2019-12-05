import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  newDepartForm : FormGroup;
  constructor(private formBuilder : FormBuilder,
              private http: DepartmentsService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.newDepartForm = this.formBuilder.group({
      name:['Nazwa', ],
      phoneNumber: ['Numer telefonu',],
      description: ['Opis', ]
  })

  }

  addDepart()
  {
    this.http.addDepartment(this.newDepartForm.value).subscribe(()=>{
      this.router.navigate([`../../departments`], { relativeTo: this.route })
    }, (error)=>{
      console.log(error);
    }) 
  }
}
