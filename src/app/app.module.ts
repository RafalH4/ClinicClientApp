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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopNavComponent } from './admin-page/top-nav/top-nav.component';
import { LeftNavComponent } from './admin-page/left-nav/left-nav.component';
import { AppointmentsComponent } from './content/appointments/appointments.component';
import { DepartmentsComponent } from './content/departments/departments.component';
import { MedOfficesComponent } from './content/med-offices/med-offices.component';
import { ContractsComponent } from './content/contracts/contracts.component';
import { PrescriptionsComponent } from './content/prescriptions/prescriptions.component';
import { RefferalsComponent } from './content/refferals/refferals.component';
import { StartPageComponent } from './start-page/start-page.component';
import { UsersComponent } from './content/users/users.component';
import { UserDetailsComponent } from './content/users/user-details/user-details.component';
import { SignOfficeComponent } from './content/departments/sign-office/sign-office.component';
import { AddDepartmentComponent } from './content/departments/add-department/add-department.component';
import { AllDepartmentsComponent } from './content/departments/all-departments/all-departments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentDetailComponent } from './content/departments/department-detail/department-detail.component';
import { AddOfficeComponent } from './content/med-offices/add-office/add-office.component';
import { AllOfficesComponent } from './content/med-offices/all-offices/all-offices.component';
import { OfficesDetailsComponent } from './content/med-offices/offices-details/offices-details.component';
import { UsersListComponent } from './content/users/users-list/users-list.component';

const appRoutes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'users', component: UsersComponent , children : [
    {path: '', component: UsersListComponent, data :{type : 'all'}},
    {path: 'roots', component: UsersListComponent, data :{type : 'roots'}},
    {path: 'doctors', component: UsersListComponent, data :{type : 'doctors'}},
    {path: 'nurses', component: UsersListComponent, data :{type : 'nurses'}},
    {path: 'patients', component: UsersListComponent, data :{type : 'patients'}},
    {path: ':id', component: UserDetailsComponent},
  ]},

  { path: 'departments', component: DepartmentsComponent, children : [
    {path: '', component: AllDepartmentsComponent},
    {path: 'add', component: AddDepartmentComponent},
    {path: ':id', component: DepartmentDetailComponent},
  ]},
  { path: 'medOffices', component: MedOfficesComponent, children : [
    {path: '', component: AllOfficesComponent},
    {path: 'add', component: AddOfficeComponent},
    {path: ':id', component: OfficesDetailsComponent},
  ]},
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
    RefferalsComponent,
    PageNotFoundComponent,
    StartPageComponent,
    UserDetailsComponent,
    SignOfficeComponent,
    AddDepartmentComponent,
    AllDepartmentsComponent,
    DepartmentDetailComponent,
    AddOfficeComponent,
    AllOfficesComponent,
    OfficesDetailsComponent,
    UsersListComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
