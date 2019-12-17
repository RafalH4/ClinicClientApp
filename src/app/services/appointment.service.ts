import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl = "https://localhost:5001/appointment/"
  constructor(private http: HttpClient) { }

  getById(id) {
    return this.http.get(this.baseUrl+"byId/"+id);
  }

  addAppointments(model: any)
  {
    return this.http.post(this.baseUrl, model);
  }

  getAppointments(params: any)
  {
    return this.http.get(this.baseUrl+params);
  }

  deleteAppointment(id: any)
  {
    return this.http.delete(this.baseUrl+id);
  }

  addUserToAppointment(model: any)
  {
    return this.http.post(this.baseUrl+"addUser", model);
  }

  getFreeAppointments(params: any){
    return this.http.get(this.baseUrl+"free"+params);
  }

  addMeToAppointment(appointmentId : any){
    return this.http.get(this.baseUrl+"addMe/"+appointmentId)
  }

  getMyPatientAppointments() {
    return this.http.get(this.baseUrl+"getPatientAppointments")
  }

  getMyDoctorAppointments() {
    return this.http.get(this.baseUrl+"getDoctorAppointments")
  }

  deletePatientFromApointment(id) {
    return this.http.get(this.baseUrl+id)
  }
  addAnamnesis(anamnesis: any)
  {
    return this.http.put(this.baseUrl+"anamnesis/", anamnesis);
  }
}
