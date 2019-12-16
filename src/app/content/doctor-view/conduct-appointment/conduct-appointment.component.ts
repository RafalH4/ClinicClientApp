import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-conduct-appointment',
  templateUrl: './conduct-appointment.component.html',
  styleUrls: ['./conduct-appointment.component.css']
})
export class ConductAppointmentComponent implements OnInit {
  param: any;
  appointment : any = {}
  constructor(private http : AppointmentService,     
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log("działam")
    this.route.paramMap.forEach(({ params }: Params) => {
      this.param = params['id'];
      console.log(this.param);
    })
    this.http.getById(this.param).subscribe(data =>{
      this.appointment = data;
      console.log(this.appointment);
    })
  }

}
