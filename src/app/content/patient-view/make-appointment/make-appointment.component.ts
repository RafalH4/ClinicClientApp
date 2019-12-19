import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  monday: Date = new Date();
  tuesday: Date = new Date();
  wednesday: Date = new Date();
  thrusday: Date = new Date();
  friday: Date = new Date();
  saturday: Date = new Date();
  days: any [];
  weekNumber=0;

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
    private router: Router,
    private changeDetector: ChangeDetectorRef

    ) { }

  ngOnInit() {
    this.setCalendarDays();
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
    this.getAppointments()

  }

  setParams(id: number) {
      var date = new Date();
     // this.startDate.setDate(date.getDate()-date.getDay()+1+id);
     this.startDate = new Date(this.days[id]);
      
      this.stringParams="?";
      this.stringParams= this.stringParams+"&date="+ this.startDate.toISOString();
    if(this.appointmentSearchForm.value.departmentName!="")
      this.stringParams=this.stringParams+"&departmentName="+this.appointmentSearchForm.value.departmentName;
    if(this.appointmentSearchForm.value.doctorId!="")
      this.stringParams=this.stringParams+"&doctorId="+this.appointmentSearchForm.value.doctorId;

      console.log(this.stringParams);
      
      return this.stringParams;
  }

  setCalendarDays()
  {
    this.days=[];
    this.monday.setDate(this.monday.getDate()-this.monday.getDay()+1+this.weekNumber);
    this.monday = new Date(this.monday);

    this.tuesday.setDate(this.tuesday.getDate()-this.tuesday.getDay()+2+this.weekNumber);
    this.tuesday = new Date(this.tuesday);

    this.wednesday.setDate(this.wednesday.getDate()-this.wednesday.getDay()+3+this.weekNumber);
    this.wednesday = new Date(this.wednesday);

    this.thrusday.setDate(this.thrusday.getDate()-this.thrusday.getDay()+4+this.weekNumber);
    this.thrusday = new Date(this.thrusday);

    this.friday.setDate(this.friday.getDate()-this.friday.getDay()+5+this.weekNumber);
    this.friday = new Date(this.friday);

    this.saturday.setDate(this.saturday.getDate()-this.saturday.getDay()+6+this.weekNumber);
    this.saturday = new Date(this.saturday);
    this.days.push(this.monday, this.tuesday, this.wednesday, this.thrusday, this.friday, this.saturday)

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

  next(){
    this.weekNumber=7;
    this.ngOnInit();
  }

  previous(){
    this.weekNumber=-7;
    this.ngOnInit();
  }
}


