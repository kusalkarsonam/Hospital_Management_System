import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DoctorListHomeComponent } from './doctor-list-home/doctor-list-home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorListDashComponent } from './doctor-list-dash/doctor-list-dash.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PatientListDashComponent } from './patient-list-dash/patient-list-dash.component';
import { AppointmentListDashComponent } from './appointment-list-dash/appointment-list-dash.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DoctorAppointmentListComponent } from './doctor-appointment-list/doctor-appointment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PatientDashboardComponent,
    DoctorDashboardComponent,
    AboutUsComponent,
    DoctorListHomeComponent,
    AppointmentComponent,
    DoctorListDashComponent,
    AdminDashboardComponent,
    PatientListDashComponent,
    AppointmentListDashComponent,
    AddDoctorComponent,
    DoctorAppointmentListComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,
    NgbModule ,
    BrowserModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
