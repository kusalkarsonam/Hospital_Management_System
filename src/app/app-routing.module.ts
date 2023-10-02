import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DoctorListHomeComponent } from './doctor-list-home/doctor-list-home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorListDashComponent } from './doctor-list-dash/doctor-list-dash.component';
import { PatientListDashComponent } from './patient-list-dash/patient-list-dash.component';
import { AppointmentListDashComponent } from './appointment-list-dash/appointment-list-dash.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorAppointmentListComponent } from './doctor-appointment-list/doctor-appointment-list.component';

const routes: Routes = [ 
{ path : ''  ,  component :HomeComponent},
{ path : 'home'  ,  component :HomeComponent},
{ path : 'app-login'  , component :LoginComponent},
{path:'app-register',component:RegisterComponent},
{path: 'admin-dashboard', component:AdminDashboardComponent},
{path: 'patient-dashboard', component:PatientDashboardComponent},
{path: 'doctor-dashboard', component:DoctorDashboardComponent},
{path: 'about-us', component:AboutUsComponent},
{path: 'doctor-list-home', component:DoctorListHomeComponent},
{path: 'appointment', component:AppointmentComponent},
{path: 'doctor-list-dash', component:DoctorListDashComponent},
{path: 'patient-list-dash', component:PatientListDashComponent},
{path: 'appointment-list-dash', component:AppointmentListDashComponent},
{path: 'add-doctor', component:AddDoctorComponent},
{path: 'doctor-appointment-list', component:DoctorAppointmentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
