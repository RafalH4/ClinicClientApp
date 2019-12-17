import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {
  baseUrl="https://localhost:5001/referral/"

  constructor(private http: HttpClient) { }

  addReferral(referral: any, id)
  {
    return this.http.post(this.baseUrl+id, referral);
  }

  getByAppointmentId(appointmentId)
  {
    return this.http.get(this.baseUrl+appointmentId);
  }
}
