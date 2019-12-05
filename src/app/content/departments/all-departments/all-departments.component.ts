import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-departments',
  templateUrl: './all-departments.component.html',
  styleUrls: ['./all-departments.component.css']
})
export class AllDepartmentsComponent implements OnInit {
  departments = [];
  constructor(private http: DepartmentsService,
  private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.getAllDepartments().subscribe((data: any[])=>{
      this.departments = data;   
    })
  }
  deleteDepartment(id)
  {
    console.log("jestem: "+id);
    this.http.deleteDepartment(id).subscribe(
      ()=>{
        console.log("succcess"),
        this.ngOnInit();
      },
      (error)=>console.log("error: "+ error.toString()))
  }

}

