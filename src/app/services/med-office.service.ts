import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedOfficeService {
  baseUrl="https://localhost:5001/medOffice"

  constructor(private http :HttpClient) { }

  getMedOffices(){
    return this.http.get("https://localhost:5001/medOffice");
  }

  addMedOffice(model: any){
    return this.http.post(this.baseUrl, model);
  }
}
