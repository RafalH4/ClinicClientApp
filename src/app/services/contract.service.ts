import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  baseUrl="https://localhost:5001/contract"
  constructor(private http: HttpClient) { }

  getContracts(){
    return this.http.get(this.baseUrl);
  }
}
