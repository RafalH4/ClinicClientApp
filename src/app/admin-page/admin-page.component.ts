import { Component, OnInit } from '@angular/core';
import decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  role: string;
  constructor(private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    this.role=tokenPayload.role;
    console.log(this.role)
  }
}
