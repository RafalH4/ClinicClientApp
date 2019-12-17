import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-conduct-appointment',
  templateUrl: './conduct-appointment.component.html',
  styleUrls: ['./conduct-appointment.component.css']
})
export class ConductAppointmentComponent implements OnInit {
  param: any;
  appointment : any = {}
  drug: string;
  drugComments: string;
  constructor(
    private httpPrescription: PrescriptionService,
    private httpAppointment : AppointmentService,     
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("działam")
    this.route.paramMap.forEach(({ params }: Params) => {
      this.param = params['id'];
      console.log(this.param);
    })
    this.httpAppointment.getById(this.param).subscribe(data =>{
      this.appointment = data;
      console.log(this.appointment);
    })
  }

  savePrescription()
  {

    console.log(this.drug);
    console.log(this.drugComments);
    var prescription = {
      drug: this.drug +" # Zalecenia: "+ this.drugComments
    }
    console.log(prescription);
    this.httpPrescription.addPrescription(prescription, this.param).subscribe(
      ()=>console.log("success"),
      (error)=> console.log(error)
    );

  }

}
