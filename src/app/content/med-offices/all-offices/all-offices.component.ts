import { Component, OnInit } from '@angular/core';
import { MedOfficeService } from 'src/app/services/med-office.service';

@Component({
  selector: 'app-all-offices',
  templateUrl: './all-offices.component.html',
  styleUrls: ['./all-offices.component.css']
})
export class AllOfficesComponent implements OnInit {

  medOffices = [];
  constructor(private http: MedOfficeService) { }

  ngOnInit() {
    this.http.getMedOffices().subscribe((data: any[]) =>{
      this.medOffices = data;
      console.log(this.medOffices);
    })
    }
    deleteOffice(id){
      this.http.deleteMedOffice(id).subscribe(
        ()=>this.ngOnInit(),
        (error)=> console.log(error))
  }
}


