import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from 'src/app/services/userServices/doctors.service';
import { NursesService } from 'src/app/services/userServices/nurses.service';
import { UsersService } from 'src/app/services/userServices/users.service';
import { RootsService } from 'src/app/services/userServices/roots.service';
import { PatientsService } from 'src/app/services/userServices/patients.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  param: string = "";
  title: string;
  users = [];

  constructor(private route: ActivatedRoute,
              private httpUsers: UsersService,
              private httpRoots: RootsService,
              private httpDoctor: DoctorsService,
              private httpNurse: NursesService,
              private httpPatient: PatientsService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      switch (data.type) {
        case 'all': {
          this.title = 'Wszyscy użytkownicy';
          this.httpUsers.getAllUsers().subscribe((data: any[])=>{
            this.users=data;
          })
          break;
        }
        case 'roots': {
          this.title = 'Administratorzy';
          this.httpRoots.getAllRoots().subscribe((data: any[])=>{
            this.users=data;
          })
          break;
        }
        case 'doctors': {
          this.title = 'Lekarze';
          this.httpDoctor.getAllDoctors().subscribe((data: any[])=>{
            this.users=data;
          })
          break;
        }
        case 'nurses': {
          this.title = 'Pielęgniarki';
          this.httpNurse.getAllNurses().subscribe((data: any[])=>{
            this.users=data;
          })
          break;
        }
        case 'patients': {
          this.title = 'Pacjenci';
          this.httpPatient.getAllPatients().subscribe((data: any[])=>{
            this.users=data;
          })
          break;
        }

      }
    })
  }

  remove(id: any){
    this.httpUsers.deleteUser(id).subscribe(
      ()=>this.ngOnInit(),
      (error)=>console.log(error)
    )
  }

}
