import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-all-contracts',
  templateUrl: './all-contracts.component.html',
  styleUrls: ['./all-contracts.component.css']
})
export class AllContractsComponent implements OnInit {
  contracts =[];

  constructor(private http: ContractService) { }

  ngOnInit() {
    this.http.getContracts().subscribe((data : any[]) => {
      this.contracts = data;
      console.log(this.contracts);
    })
  }

  deleteContract(id){

  }

}
