import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  baseUrl="https://localhost:5001/prescription/"

  constructor(private http: HttpClient) { }

  addPrescription(prescription: any, id)
  {
    return this.http.post(this.baseUrl+id, prescription);
  }

  getByAppointmentId(appointmentId)
  {
    return this.http.get(this.baseUrl+appointmentId);
  }
  getMyPatientPrescription(){
    return this.http.get(this.baseUrl+"myPrescriptions");
  }
}
