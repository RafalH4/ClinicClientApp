import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopNavComponent } from './admin-page/top-nav/top-nav.component';
import { LeftNavComponent } from './admin-page/left-nav/left-nav.component';
import { UsersComponent } from './content/users/users.component';
import { AppointmentsComponent } from './content/appointments/appointments.component';
import { DepartmentsComponent } from './content/departments/departments.component';
import { MedOfficesComponent } from './content/med-offices/med-offices.component';
import { ContractsComponent } from './content/contracts/contracts.component';
import { PrescriptionsComponent } from './content/prescriptions/prescriptions.component';
import { RefferalsComponent } from './content/refferals/refferals.component';


const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminPageComponent,
    TopNavComponent,
    LeftNavComponent,
    UsersComponent,
    AppointmentsComponent,
    DepartmentsComponent,
    MedOfficesComponent,
    ContractsComponent,
    PrescriptionsComponent,
    RefferalsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
