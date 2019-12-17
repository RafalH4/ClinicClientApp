import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  role: string;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    this.role=tokenPayload.role;
  }

  logout()
  {
    this.router.navigate(['']);
    localStorage.removeItem('token');
  }

}
