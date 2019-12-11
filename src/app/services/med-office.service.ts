import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedOfficeService {
  baseUrl="https://localhost:5001/medOffice/"

  constructor(private http :HttpClient) { }

  getMedOffices(){
    return this.http.get(this.baseUrl);
  }

  getMedOfficeById(id: any){
    return this.http.get(this.baseUrl + id);
  }

  addMedOffice(model: any){
    return this.http.post(this.baseUrl, model);
  }

  updateMedOffice(model: any, id: any){
    return this.http.put(this.baseUrl+id, model);
  }

  deleteMedOffice(id: any){
    return this.http.delete(this.baseUrl+id);
  }
}
