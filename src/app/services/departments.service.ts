import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  baseUrl='https://localhost:5001/department/';
  constructor(private http: HttpClient) { }

  getAllDepartments()
  {
    return this.http.get(this.baseUrl)
  }

  addDepartment(model: any)
  {
    return this.http.post(this.baseUrl, model)
  }
}
