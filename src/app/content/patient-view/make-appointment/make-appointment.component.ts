import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DepartmentsService } from 'src/app/services/departments.service';
import { DoctorsService } from 'src/app/services/userServices/doctors.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit{
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
    private formBuilder: FormBuilder,
    private router: Router

    ) { }

  ngOnInit() {
    this.httpDepartment.getAllDepartments().subscribe((data: any[]) => {
      this.departments = data;
    })
    this.httpDoctor.getAllDoctors().subscribe((data: any[]) => {
      this.doctors = data;
    })

    this.appointmentSearchForm = this.formBuilder.group({
      departmentName: ['',],
      doctorId: ['',],
    })
  }

  setParams(id: number) {
      var date = new Date();
      this.startDate.setDate(date.getDate()-date.getDay()+1+id);
      
      this.stringParams="?";
      this.stringParams= this.stringParams+"&date="+ this.startDate.toISOString();
    if(this.appointmentSearchForm.value.departmentName!="")
      this.stringParams=this.stringParams+"&departmentName="+this.appointmentSearchForm.value.departmentName;
    if(this.appointmentSearchForm.value.doctorId!="")
      this.stringParams=this.stringParams+"&doctorId="+this.appointmentSearchForm.value.doctorId;

      console.log(this.stringParams);
      
      return this.stringParams;
  }

  getAppointments(){  
      this.httpAppointment.getFreeAppointments(this.setParams(0)).subscribe((data: any[])=>{
        this.mondays=data;
        console.log(this.mondays);
      })
      this.httpAppointment.getFreeAppointments(this.setParams(1)).subscribe((data: any[])=>{
        this.tuesdays=data;
      })
      this.httpAppointment.getFreeAppointments(this.setParams(2)).subscribe((data: any[])=>{
        this.wednesdays=data;
      })
      this.httpAppointment.getFreeAppointments(this.setParams(3)).subscribe((data: any[])=>{
        this.thrusdays=data;
      })
      this.httpAppointment.getFreeAppointments(this.setParams(4)).subscribe((data: any[])=>{
        this.fridays=data;
      })
      this.httpAppointment.getFreeAppointments(this.setParams(5)).subscribe((data: any[])=>{
        this.saturdays=data;
      })
  }


  addMeToAppointment(id)
  {

    console.log(id);
    this.httpAppointment.addMeToAppointment(id).subscribe(
      ()=>{
        this.getAppointments();
        this.router.navigateByUrl('patientSite');
      },
      (error)=>console.log(error)
    )


  }
}


