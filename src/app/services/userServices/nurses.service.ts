import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NursesService {

  baseUrl='https://localhost:5001/nurse'
  constructor(private http: HttpClient) { }

  getAllNurses(){
    return this.http.get(this.baseUrl);
  }
}
