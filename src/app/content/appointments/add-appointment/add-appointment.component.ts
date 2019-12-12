import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/userServices/doctors.service';
import { MedOfficeService } from 'src/app/services/med-office.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit  {

  constructor(private httpDoctor: DoctorsService,
    private httpMedOffice: MedOfficeService,
    private formBuilder: FormBuilder,
    private http: AppointmentService) { }
  doctors: any[];
  medOffices: any[];
  dates = new Array<Date>();
  newAppointments: FormGroup;

  ngOnInit() {
    this.httpMedOffice.getMedOffices().subscribe((data: any[]) => {
      this.medOffices = data;
      console.log(this.medOffices)
    })
    this.httpDoctor.getAllDoctors().subscribe((data: any[]) => {
      this.doctors = data;
    })

    this.newAppointments = this.formBuilder.group({
      startDate: ['',],
      endDate: ['',],
      startHour: ['',],
      endHour: ['',],
      rangeInMinutes: ['',],
      doctorId: ['',],
      medOfficeId: ['',]
  })
}

  newRange(){
    for (var d = new Date(this.newAppointments.value.startDate); d <=new Date(this.newAppointments.value.endDate); d.setDate(d.getDate() + 1)) {
        this.dates.push(new Date(d));
    }

    console.log(this.dates);

  }
  deleteDate(i){
    console.log(i);
    this.dates.splice(i, i+1);
    console.log( this.dates);
  }
  addAppointments() {
    console.log(this.newAppointments.value)
    this.http.addAppointments(this.newAppointments.value).subscribe(
      ()=>console.log("success"),
      (error) => console.log(error)
    )
  
  }

}

