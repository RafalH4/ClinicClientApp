import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl = "https://localhost:5001/appointment/"
  constructor(private http: HttpClient) { }

  addAppointments(model: any)
  {
    return this.http.post(this.baseUrl, model);
  }

  getAppointments(params: any)
  {
    return this.http.get(this.baseUrl+params)
  }
}
