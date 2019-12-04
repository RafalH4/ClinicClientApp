import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl='https://localhost:5001/user/';

  constructor(private http: HttpClient) { }

  getAllUsers()
  {
    return this.http.get(this.baseUrl)
  }

  getUserById(id : string)
  {
    return this.http.get(this.baseUrl+id)
  }

  updateUser(model : any)
  {
    console.log("model:")
   // console.log(model);
    return this.http.post(this.baseUrl, model)
  }
}
