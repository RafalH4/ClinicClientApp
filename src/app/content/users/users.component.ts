import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  constructor(private http: UsersService) { }

  ngOnInit() {
    this.http.getAllUsers().subscribe((data: any[]) =>{
      this.users = data;
      console.log(this.users);
    })
  }

}
