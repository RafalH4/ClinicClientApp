import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(
    private authService : AuthService, 
    private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    
    const expectedRole = route.data.expectedRole;
    const expectedRole2 = route.data.expectedRole2;
    const expectedRole3 = route.data.expectedRole3;
    const expectedRole4 = route.data.expectedRole4;
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    
    console.log("Rola: "+tokenPayload.role);
    console.log("Wymagane role: "+expectedRole+","+expectedRole2+","+expectedRole3+","+expectedRole4)

    if(this.authService.loggedIn())
    {
      // if(expectedRole=="startPage")
      // {
      //   if(tokenPayload.role=='root')
      //     this.router.navigate(['']);
      //   if(tokenPayload.role=='doctor')
      //     this.router.navigate(['doctorSite']);
      //   if(tokenPayload.role=='nurse')
      //     this.router.navigate(['nurseSite']);
      //   if(tokenPayload.role=='patient')
      //     this.router.navigate(['patientSite']);
      // }

      if(tokenPayload.role == expectedRole || tokenPayload.role == expectedRole2 || 
        tokenPayload.role == expectedRole3 || tokenPayload.role == expectedRole4)
        return true
      else{
        this.router.navigate(['']);
        return false
      }
        
    }
    this.router.navigate(['']);
    return false
  }
   
}

