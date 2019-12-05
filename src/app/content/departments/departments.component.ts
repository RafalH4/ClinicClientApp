import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments = [];
  constructor(private http: DepartmentsService) { }

  ngOnInit() {
    this.http.getAllDepartments().subscribe((data: any[])=>{
      this.departments = data;
      console.log(this.departments)
    })
  }

}
