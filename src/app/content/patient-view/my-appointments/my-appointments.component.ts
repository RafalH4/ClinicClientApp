import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DepartmentsService } from 'src/app/services/departments.service';
import { DoctorsService } from 'src/app/services/userServices/doctors.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit {
  departments: any[];
  doctors: any[];
  appointments: any[];
  mondays : any[];
  tuesdays : any[];
  wednesdays : any[];
  thrusdays: any[];
  fridays: any[];
  saturdays : any[];
  myAppointments: any[];

  numberOfWeek : number = 0;

  stringParams: string;
  startDate = new Date();
  endDate = new Date();
  appointmentSearchForm: FormGroup;
  constructor(
    private httpDepartment: DepartmentsService,
    private httpDoctor: DoctorsService,
    private httpAppointment: AppointmentService,
    private formBuilder: FormBuilder

    ) { }

  ngOnInit() {
    this.getMyAppointments();
    console.log("wykonuję");

  }

  getMyAppointments()
  {
    this.httpAppointment.getMyPatientAppointments().subscribe((data: any[])=>{
        this.myAppointments=data;
        console.log(this.myAppointments);
      }
    )
  }

  delete(id)
  {
    console.log(id);
    this.httpAppointment.deletePatientFromApointment(id).subscribe(data =>
      {
        console.log("success")
        this.ngOnInit()
      }
      
      )
    
  }
}
