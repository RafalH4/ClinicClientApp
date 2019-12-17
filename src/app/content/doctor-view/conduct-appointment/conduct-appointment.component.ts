import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { ReferralService } from 'src/app/services/referral.service';

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
  prescriptions: any[];

  treatment: string;
  treatmentComments: string;
  referrals: any[];
  
  constructor(
    private httpReferral: ReferralService,
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

    this.httpPrescription.getByAppointmentId(this.param).subscribe((data: any[])=>{
      this.prescriptions = data;
      console.log(this.prescriptions);
    })

    this.httpReferral.getByAppointmentId(this.param).subscribe((data: any[])=>{
      this.referrals = data;
      console.log(this.referrals);
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
      ()=>this.ngOnInit(),
      (error)=> console.log(error)
    );
  }

  saveReferral()
  {
    console.log(this.treatment);
    console.log(this.treatmentComments);
    var referral = {
      treatment: this.treatment +" # Zalecenia: "+ this.treatmentComments
    }
    console.log(referral);
    this.httpReferral.addReferral(referral, this.param).subscribe(
      ()=>this.ngOnInit(),
      (error)=> console.log(error)
    );
  }

}
