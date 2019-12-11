import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  baseUrl="https://localhost:5001/contract/"
  constructor(private http: HttpClient) { }

  getContracts(){
    return this.http.get(this.baseUrl);
  }
  getContractById(id){
    return this.http.get(this.baseUrl+"id/"+id);
  }

  getContractsByDepartmentId(id: any){
    return this.http.get(this.baseUrl +"department/"+ id);
  }
  
  addContract(model: any){
    return this.http.post(this.baseUrl, model);
  }

  deleteContract(id: any){
    return this.http.delete(this.baseUrl+id);
  }

  updateContract(model: any, id: any){
    return this.http.put(this.baseUrl+"update/"+id, model);
  }
}
