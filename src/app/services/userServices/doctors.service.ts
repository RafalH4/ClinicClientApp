import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  baseUrl='https://localhost:5001/doctor/';
  constructor(private http: HttpClient) { }

  getAllDoctors(){
    return this.http.get(this.baseUrl);
  }
}
