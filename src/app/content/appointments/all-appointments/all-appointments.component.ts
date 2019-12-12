import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { DoctorsService } from 'src/app/services/userServices/doctors.service';
import { PatientsService } from 'src/app/services/userServices/patients.service';
import { MedOfficeService } from 'src/app/services/med-office.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {
  doctors: any[];
  patients: any[];
  medOffices: any[];
  departments: any[];
  appointments: any[];
  stringParams: string="";
  selectedAppointment: string;
  patientIdToAdd: string;

  appointmentSearchForm: FormGroup;


  constructor(private http: AppointmentService,
    private httpDepartment: DepartmentsService,
    private httpDoctor: DoctorsService,
    private httpPatient: PatientsService,
    private httpMedOffice: MedOfficeService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.httpDepartment.getAllDepartments().subscribe((data: any[]) => {
      this.departments = data;
    })
    this.httpDoctor.getAllDoctors().subscribe((data: any[]) => {
      this.doctors = data;
    })
    this.httpPatient.getAllPatients().subscribe((data: any[]) => {
      this.patients = data;
    })
    this.httpMedOffice.getMedOffices().subscribe((data: any[]) => {
      this.medOffices = data;
      console.log(this.medOffices)
    })

    this.appointmentSearchForm = this.formBuilder.group({
      startDate: ['',],
      endDate: ['',],
      departmentName: ['',],
      doctorId: ['',],
      patientId: ['',],
      medOfficeId: ['',],
      isFree: [false,]
    })
  }
  getAppointments(){
    this.stringParams="?";
    console.log(this.appointmentSearchForm.value)
    if(this.appointmentSearchForm.value.startDate!="")
      this.stringParams= this.stringParams+"&startdate="+this.appointmentSearchForm.value.startDate;
    if(this.appointmentSearchForm.value.endDate!="")
      this.stringParams=this.stringParams+"&enddate="+this.appointmentSearchForm.value.endDate;
    if(this.appointmentSearchForm.value.departmentName!="")
      this.stringParams=this.stringParams+"&departmentName="+this.appointmentSearchForm.value.departmentName;
    if(this.appointmentSearchForm.value.doctorId!="")
      this.stringParams=this.stringParams+"&doctorId="+this.appointmentSearchForm.value.doctorId;
    if(this.appointmentSearchForm.value.doctorId!="")
      this.stringParams=this.stringParams+"&doctorId="+this.appointmentSearchForm.value.doctorId;
    if(this.appointmentSearchForm.value.patientId!="")
      this.stringParams=this.stringParams+"&doctorId="+this.appointmentSearchForm.value.patientId;
    if(this.appointmentSearchForm.value.medOfficeId!="")
      this.stringParams=this.stringParams+"&medOfficeId="+this.appointmentSearchForm.value.medOfficeId;
    if(this.appointmentSearchForm.value.isFree!=false)
      this.stringParams=this.stringParams+"&isFree="+this.appointmentSearchForm.value.isFree;
    console.log(this.stringParams);

    this.http.getAppointments(this.stringParams).subscribe((data: any[])=>{
      this.appointments = data;
      console.log(this.appointments);
    })

  }

  deleteAppointment(id: any){
    this.http.deleteAppointment(id).subscribe(
      ()=>{
        this.http.getAppointments(this.stringParams).subscribe((data: any[])=>{
          this.appointments = data;
          console.log(this.appointments);
      },
      (error)=>console.log(error))
  })
}

addPatient(id){
  if(this.selectedAppointment==id)
    this.selectedAppointment=""
  else
    this.selectedAppointment=id;
}
savePatient()
{
  console.log(this.patientIdToAdd);
}



}
