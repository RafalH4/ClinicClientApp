import { Component, OnInit } from '@angular/core';
import decode from 'jwt-decode';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  role: string;
  constructor() { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    this.role=tokenPayload.role;
  }

}
