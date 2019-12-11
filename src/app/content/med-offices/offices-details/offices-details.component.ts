import { Component, OnInit } from '@angular/core';
import { MedOfficeService } from 'src/app/services/med-office.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-offices-details',
  templateUrl: './offices-details.component.html',
  styleUrls: ['./offices-details.component.css']
})
export class OfficesDetailsComponent implements OnInit {
  editMode: boolean = false;
  editOfficeForm : FormGroup;
  param: any;
  office: any = {};
  departments : any[];
  constructor(private http: MedOfficeService,
    private httpDepartment: DepartmentsService,
    private route: ActivatedRoute,
    private formBuilder : FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.forEach(({ params }: Params) => {
      this.param = params['id']
    })
    this.http.getMedOfficeById(this.param).subscribe(((data: any) => {
      this.office =data;
      console.log(this.office);
    }));
  }

  editOffice() {
    this.httpDepartment.getAllDepartments().subscribe((data: any[])=>{
      this.departments = data;
    })
    console.log(this.office.department.name);
    this.editMode=true;
    this.editOfficeForm = this.formBuilder.group({
      officeNumber:[this.office.officeNumber, ],
      description: [this.office.description,],
      departmentName: [this.office.department.name,],
  })
  }

  saveOffice(){
    console.log(this.editOfficeForm.value )
    this.http.updateMedOffice(this.editOfficeForm.value, this.param).subscribe(()=>{
      this.router.navigate([`../../medOffices`], { relativeTo: this.route })
    }, (error)=>{
      console.log(error);
    }) 
  }
  deleteOffice()
  {
    this.http.deleteMedOffice(this.param).subscribe(()=>{
      this.router.navigate([`../../medOffices`], { relativeTo: this.route })
    }, (error)=>{
      console.log(error);
    })
  }



}
