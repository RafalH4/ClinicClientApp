import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {
  appointments : any[];

  constructor(
    private http: AppointmentService,
    private router: Router) { }

  ngOnInit() {
    this.http.getMyDoctorAppointments().subscribe((data: any[])=>{
      this.appointments = data;
      console.log(this.appointments)
    })
  }

  openAppointment(id){
    this.router.navigateByUrl("doctorSite/"+id);
  }

}
