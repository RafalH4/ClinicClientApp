import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  contract: any = {};
  param: any;
  editMode=false;
  editContractForm: FormGroup;

  constructor(private http: ContractService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.forEach(({ params }: Params) => {
      this.param = params['id']
    })
    this.http.getContractById(this.param).subscribe((data: any) => {
      this.contract = data;
      console.log(this.contract);
    })

  }

  deleteOffice(){
    this.http.deleteContract(this.param).subscribe(()=>{
      this.router.navigate([`../../contracts`], { relativeTo: this.route })
    }, (error)=>{
      console.log(error);
    })
  }
  editContract(){
    this.editMode=true;
   
    this.editContractForm = this.formBuilder.group({
      numberOfMonths: [this.contract.numberOfMonths,],
      hoursPerMonth: [this.contract.hoursPerMonth,],
      salaryPerMonth: [this.contract.salaryPerMonth,]
    })
  }
  changeMode() {
    this.editMode=!this.editMode;
  }

  saveContract(){
    this.http.updateContract(this.editContractForm.value, this.param).subscribe(
      ()=>{
        console.log("success")
        this.ngOnInit();
        this.changeMode();
      },
      (error) => console.log(error)
    )
  }


}
