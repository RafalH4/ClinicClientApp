import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/userServices/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors = [];
  constructor(private http: DoctorsService) { }

  ngOnInit() {
    this.http.getAllDoctors().subscribe((data: any[]) =>
    {
      this.doctors=data;
    })
  }

}
