import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { DoctorsService } from 'src/app/services/userServices/doctors.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {
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
    this.getMyAppointments();
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

  checkAppointment(date: Date, patient)
  {
    var dateToCheck=new Date(date);
    var a: Date = new Date;
    
    if(dateToCheck.getTime() < a.getTime() || patient != null)
    {
      console.log("działam")
      console.log(date);
      console.log(patient);
      return false
    }
    else 
      return true
  }

  addMeToAppointment(id)
  {
    console.log(id);
    this.httpAppointment.addMeToAppointment(id).subscribe(
      ()=>console.log("success"),
      (error)=>console.log(error)
    )
  }

  getMyAppointments()
  {
    this.httpAppointment.getMyPatientAppointments().subscribe((data: any[])=>{
        this.myAppointments=data;
        console.log(this.myAppointments);
      }
    )
  }
}
