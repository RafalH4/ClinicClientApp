import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-patient-to-appointment',
  templateUrl: './add-patient-to-appointment.component.html',
  styleUrls: ['./add-patient-to-appointment.component.css']
})
export class AddPatientToAppointmentComponent implements OnInit {

  param: string = "";
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.forEach(({params}:Params)=>{
      this.param = params['id']
      console.log(this.param);
      })
  }

}
