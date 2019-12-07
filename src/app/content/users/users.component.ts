import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/userServices/users.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {



  param: string = "";
  users = [];
  constructor(private route: ActivatedRoute,
              private http: UsersService) { }

  ngOnInit() {
    this.route.paramMap.forEach(({params}:Params)=>{
      this.param = params['id']
      })
      console.log("param"+this.param);


      console.log("param: +"+ this.param)
    this.http.getAllUsers().subscribe((data: any[]) =>{
      this.users = data;
      console.log(this.users);
    })
  }




}
