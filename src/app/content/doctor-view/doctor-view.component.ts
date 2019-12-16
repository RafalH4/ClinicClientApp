import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {
  appointments : any[];

  constructor(private http: AppointmentService) { }

  ngOnInit() {
    this.http.getMyDoctorAppointments().subscribe((data: any[])=>{
      this.appointments = data;
      console.log(this.appointments)
    })
  }

}
