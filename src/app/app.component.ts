import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ClinicClientApp';

  values : any;
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.getValues();
  }
  getValues()
  {
    this.http.get('https://localhost:5001/doctor').subscribe(response => {
      this.values = response;
      console.log(this.values);

    }, error => {
      console.log(error);
    })
  }
}
