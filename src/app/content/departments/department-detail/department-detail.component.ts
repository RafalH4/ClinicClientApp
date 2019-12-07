import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DepartmentsService } from 'src/app/services/departments.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  editMode: boolean = false;
  param: string = "";
  editDepartForm : FormGroup;
  department: any = {}
  constructor(private route: ActivatedRoute, 
              private http: DepartmentsService, 
              private formBuilder : FormBuilder,
              private router: Router, ) { }

  ngOnInit() {
    this.route.paramMap.forEach(({params}:Params)=>{
      this.param = params['id']
      })
      console.log(this.param);

      this.http.getById(this.param).subscribe(((data: any) => {
        this.department =data;

        console.log(this.department);
      }));
  }

  editDepartment() {
    this.editMode=true;
    this.editDepartForm = this.formBuilder.group({
      name:[this.department.name, ],
      phoneNumber: [this.department.phoneNumber,],
      description: [this.department.description, ]
  })
  }

  saveDepartment()
  {
    this.http.editDepartment(this.editDepartForm.value).subscribe(()=>{
      this.router.navigate([`../../departments`], { relativeTo: this.route })
    }, (error)=>{
      console.log(error);
    }) 
  }
  deleteDepartment()
  {
    console.log("jestem + "+this.department.id);
    this.http.deleteDepartment(this.department.id).subscribe(
      ()=>console.log("succcess"), 
      (error)=>console.log("error: "+ error))
  }

  deleteDepart()
  {

  }

}
