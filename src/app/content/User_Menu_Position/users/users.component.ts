import { Component, OnInit, SimpleChanges, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UsersService } from 'src/app/services/userServices/users.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    console.log("zmiana");
  }
  param: string = "";
  users = [];
  constructor(private route: ActivatedRoute,
              private http: UsersService) { }

  ngOnInit() {


      console.log("param: +"+ this.param)
    this.http.getAllUsers().subscribe((data: any[]) =>{
      this.users = data;
      console.log(this.users);
    })
  }




}
