import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/userServices/doctors.service';
import { DepartmentsService } from 'src/app/services/departments.service';
import { MedOfficeService } from 'src/app/services/med-office.service';




@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private httpDoctor: DoctorsService,
    private httpMedOffice: MedOfficeService) { }
  doctors: any[];
  medOffices: any[];
  dates = new Array<Date>();
  startDate: Date;
  endDate : Date;

  ngOnInit() {
    this.httpMedOffice.getMedOffices().subscribe((data: any[]) => {
      this.medOffices = data;
      console.log(this.medOffices)
    })
    this.httpDoctor.getAllDoctors().subscribe((data: any[]) => {
      this.doctors = data;
    })
  }

  newRange(){
    
    var now = new Date();
    var daysOfYear = [];
    for (var d = new Date(this.startDate); d <=new Date(this.endDate); d.setDate(d.getDate() + 1)) {
        this.dates.push(new Date(d));
        //console.log(d);
    }

    console.log(this.dates);

  }
  deleteDate(i){
    console.log(i);
    this.dates.splice(i, i+1);
    console.log( this.dates);
  }
 

}

