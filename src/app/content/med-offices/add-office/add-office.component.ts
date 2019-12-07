import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MedOfficeService } from 'src/app/services/med-office.service';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
  newMedOfficeForm : FormGroup;
  departments: any[];
  constructor(private formBuilder : FormBuilder,
              private http: MedOfficeService, 
              private httpDepartment: DepartmentsService,
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
this.httpDepartment.getAllDepartments().subscribe((data: any[])=>{
  this.departments=data;
  console.log(this.departments);
})
    this.newMedOfficeForm = this.formBuilder.group({
      officeNumber:['Numer pomieszczenia', ],
      description: ['Opis', ],
      departmentName: ['', ]
  })
  }
  addMedOffice()
  {
    console.log(this.newMedOfficeForm.value)
    this.http.addMedOffice(this.newMedOfficeForm.value).subscribe(
      ()=>this.router.navigate([`../../medOffices`], { relativeTo: this.route }), 
      (error)=> console.log(error));
  }

}
