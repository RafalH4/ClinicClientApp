import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthGuard } from './guard/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';

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
import { AddUserComponent } from './content/users/add-user/add-user.component';
import { AllContractsComponent } from './content/contracts/all-contracts/all-contracts.component';
import { AddContractComponent } from './content/contracts/add-contract/add-contract.component';
import { ContractDetailComponent } from './content/contracts/contract-detail/contract-detail.component';
import { AddAppointmentComponent } from './content/appointments/add-appointment/add-appointment.component';
import { AllAppointmentsComponent } from './content/appointments/all-appointments/all-appointments.component';
import { AddPatientToAppointmentComponent } from './content/appointments/add-patient-to-appointment/add-patient-to-appointment.component';
import { PatientViewComponent } from './content/patient-view/patient-view.component';
import { NurseViewComponent } from './content/nurse-view/nurse-view.component';
import { DoctorViewComponent } from './content/doctor-view/doctor-view.component';
import { ConductAppointmentComponent } from './content/doctor-view/conduct-appointment/conduct-appointment.component';
import { AllAppointmentComponent } from './content/doctor-view/all-appointment/all-appointment.component';
import { MakeAppointmentComponent } from './content/patient-view/make-appointment/make-appointment.component';
import { MyAppointmentsComponent } from './content/patient-view/my-appointments/my-appointments.component';
import { MyDocumentsComponent } from './content/patient-view/my-documents/my-documents.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';



export function tokenGetter() {
  return localStorage.getItem('token');
}





const appRoutes: Routes = [
  { path: '', component: StartPageComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'appointments', component: AppointmentsComponent, canActivate:[AuthGuard], 
    data: {expectedRole: 'root', expectedRole2:'doctor', expectedRole3: 'nurse'} ,children : [
    {path: '', component: AllAppointmentsComponent},
    {path: 'add', component: AddAppointmentComponent},
    {path: 'addPatient/:id', component: AddPatientToAppointmentComponent},
  ]},
  { path: 'users', component: UsersComponent , canActivate:[AuthGuard], 
  data: {expectedRole: 'root'}, children : [
    {path: '', component: UsersListComponent, data :{type : 'all'}},
    {path: 'roots', component: UsersListComponent, data :{type : 'roots'}},
    {path: 'doctors', component: UsersListComponent, data :{type : 'doctors'}},
    {path: 'nurses', component: UsersListComponent, data :{type : 'nurses'}},
    {path: 'patients', component: UsersListComponent, data :{type : 'patients'}},
    {path: 'add', component: AddUserComponent},
    {path: ':id', component: UserDetailsComponent}
  ]},
  { path: 'departments', component: DepartmentsComponent, canActivate:[AuthGuard], 
  data: {expectedRole: 'root'}, children : [
    {path: '', component: AllDepartmentsComponent},
    {path: 'add', component: AddDepartmentComponent},
    {path: ':id', component: DepartmentDetailComponent},
  ]},
  { path: 'medOffices', component: MedOfficesComponent, canActivate:[AuthGuard], 
  data: {expectedRole: 'root'}, children : [
    {path: '', component: AllOfficesComponent},
    {path: 'add', component: AddOfficeComponent},
    {path: ':id', component: OfficesDetailsComponent},
  ]},
  { path: 'contracts', component: ContractsComponent, canActivate:[AuthGuard], 
  data: {expectedRole: 'root'}, children: [
    {path: '', component: AllContractsComponent},
    {path: 'add', component: AddContractComponent},
    {path: ':id', component: ContractDetailComponent},
  ] },
  {path: 'patientSite', component: PatientViewComponent, canActivate:[AuthGuard], 
  data: {expectedRole: 'patient'} },
  {path: 'nurseSite', component: NurseViewComponent, canActivate:[AuthGuard], 
  data: {expectedRole: 'nurse'} },
  {path: 'doctorSite', component: DoctorViewComponent, canActivate:[AuthGuard], 
  data: {expectedRole: 'doctor'}, children: [
    {path: '', component: AllAppointmentComponent},
    {path: ':id', component: ConductAppointmentComponent},
  ]},
  { path: 'login', component: LoginComponent },
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
    AddUserComponent,
    AllContractsComponent,
    AddContractComponent,
    ContractDetailComponent,
    AddAppointmentComponent,
    AllAppointmentsComponent,
    AddPatientToAppointmentComponent,
    PatientViewComponent,
    NurseViewComponent,
    DoctorViewComponent,
    ConductAppointmentComponent,
    AllAppointmentComponent,
    MakeAppointmentComponent,
    MyAppointmentsComponent,
    MyDocumentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5001'],
        blacklistedRoutes: ['localhost:5001/auth']
      }
    })

  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
