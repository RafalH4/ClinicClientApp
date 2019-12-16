import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-appointment',
  templateUrl: './all-appointment.component.html',
  styleUrls: ['./all-appointment.component.css']
})
export class AllAppointmentComponent implements OnInit {
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
