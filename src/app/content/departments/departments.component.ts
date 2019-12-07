import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  param: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.forEach(({params}:Params)=>{
      this.param = params['id']
      })
      console.log("param"+this.param);
  }

}
