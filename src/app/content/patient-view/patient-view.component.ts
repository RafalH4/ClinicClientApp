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

  stringParams: string;
  startDate = new Date();
  endDate = new Date();
  actualDate =  new Date();
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
      departmentName: ["Wybierz oddział",],
      doctorId: ['Wybierz lekarza',],
    })
  }


  setParams(id: number) {
      var date = new Date();
      this.startDate.setDate(date.getDate()-date.getDay()+1+id);
      this.endDate.setDate(date.getDate()-date.getDay()+1+id);

      this.startDate.setHours(1,0,0);
      this.endDate.setHours(0,59,59);

      this.stringParams="?";
      this.stringParams= this.stringParams+"&startdate="+ this.startDate.toISOString();
      this.stringParams=this.stringParams+"&enddate="+this.endDate.toISOString();

    if(this.appointmentSearchForm.value.departmentName!="")
      this.stringParams=this.stringParams+"&departmentName="+this.appointmentSearchForm.value.departmentName;
    if(this.appointmentSearchForm.value.doctorId!="")
      this.stringParams=this.stringParams+"&doctorId="+this.appointmentSearchForm.value.doctorId;

      console.log(this.stringParams);
      
      return this.stringParams;
  }

  getAppointments(){  
      this.httpAppointment.getAppointments(this.setParams(0)).subscribe((data: any[])=>{
        this.mondays=data;
      })
      this.httpAppointment.getAppointments(this.setParams(1)).subscribe((data: any[])=>{
        this.tuesdays=data;
      })
      this.httpAppointment.getAppointments(this.setParams(2)).subscribe((data: any[])=>{
        this.wednesdays=data;
      })
      this.httpAppointment.getAppointments(this.setParams(3)).subscribe((data: any[])=>{
        this.thrusdays=data;
      })
      this.httpAppointment.getAppointments(this.setParams(4)).subscribe((data: any[])=>{
        this.fridays=data;
      })
      this.httpAppointment.getAppointments(this.setParams(5)).subscribe((data: any[])=>{
        this.saturdays=data;
      })
  }
}
