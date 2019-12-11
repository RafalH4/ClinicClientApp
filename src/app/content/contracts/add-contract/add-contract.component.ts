import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { DoctorsService } from 'src/app/services/userServices/doctors.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContractService } from 'src/app/services/contract.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  doctors: any[];
  departments: any[];
  newContractForm: FormGroup;
  constructor(private http: ContractService,
    private httpDepartment: DepartmentsService,
    private httpDoctor: DoctorsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.httpDepartment.getAllDepartments().subscribe((data: any[]) => {
      this.departments = data;
    })
    this.httpDoctor.getAllDoctors().subscribe((data: any[]) => {
      this.doctors = data;
    })

    this.newContractForm = this.formBuilder.group({
      departmentId: ['Wybierz oddział',],
      doctorId: ['',],
      startDate: ['',],
      numberOfMonths: ['',],
      hoursPerMonth: ['',],
      salaryPerMonth: ['',]
    })
  }
  addContract() {
    this.http.addContract(this.newContractForm.value).subscribe(
      () => this.router.navigate([`../../contracts`], { relativeTo: this.route }),
      (error) => console.log(error));
  }
}
