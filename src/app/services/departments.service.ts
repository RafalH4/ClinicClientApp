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
  getById(id: any)
  {
    return this.http.get(this.baseUrl +id)
  }
  editDepartment(model: any)
  {
    return this.http.put(this.baseUrl, model)
  }
  deleteDepartment(id: string)
  {
    return this.http.delete(this.baseUrl+id)
  }
}
