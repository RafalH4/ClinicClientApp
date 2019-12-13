import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ClinicClientApp';
  jwtHelper = new JwtHelperService();
  values : any;
  constructor(private http: HttpClient, private authService: AuthService) { }
  
  ngOnInit(): void {
    const token= localStorage.getItem('token');
    if(token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  //  this.getValues();
  }
  // getValues()
  // {
  //   this.http.get('https://localhost:5001/doctor').subscribe(response => {
  //     this.values = response;
  //     console.log(this.values);

  //   }, error => {
  //     console.log(error);
  //   })
  // }
}
