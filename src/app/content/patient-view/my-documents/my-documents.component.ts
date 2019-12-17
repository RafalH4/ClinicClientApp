import { Component, OnInit } from '@angular/core';
import { ReferralService } from 'src/app/services/referral.service';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.css']
})
export class MyDocumentsComponent implements OnInit {

  referrals: any[];
  prescriptions: any[];
  constructor(
    private httpReferral: ReferralService,
    private httpPrescription: PrescriptionService
  ) { }

  ngOnInit() {
    this.httpReferral.getMyPatientReferrals().subscribe((data: any[])=>{
      this.referrals=data;
      console.log(this.referrals)
    })

    this.httpPrescription.getMyPatientPrescription().subscribe((data:any[])=>{
      this.prescriptions = data;
      console.log(this.prescriptions);
    })
  }

}
