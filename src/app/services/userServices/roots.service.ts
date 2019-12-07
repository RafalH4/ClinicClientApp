import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RootsService {

  baseUrl='https://localhost:5001/root'
  constructor(private http: HttpClient) { }
  
  getAllRoots()
  {
    return this.http.get(this.baseUrl);
  }
}
