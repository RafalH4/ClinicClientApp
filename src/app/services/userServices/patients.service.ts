import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  baseUrl='https://localhost:5001/patient';
  constructor(private http: HttpClient) { }

  getAllPatients()
  {
    return this.http.get(this.baseUrl);
  }
}
