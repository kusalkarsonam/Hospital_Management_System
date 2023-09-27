import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './commonurl';
import { Patient } from './login/Patient';
import { Doctor } from './login/Doctor';
import { Admin } from './login/Admin';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  adminLogin(patient: Patient) {
    throw new Error('Method not implemented.');
  }


  constructor(private httpClient: HttpClient) { }
  
  public patientRegister(patient: Patient) { 
      return this.httpClient.post(`${baseUrl}/patient/add`, patient)

    }
  
  public patient_Login(patient: Patient) { 
      return this.httpClient.post(`${baseUrl}/patient/add`, patient)

    }

    public admin_Login(admin: Admin) { 
      return this.httpClient.post(`${baseUrl}/admin/`, admin)

    }


    public doctor_Login(doctor: Doctor) { 
      return this.httpClient.post(`${baseUrl}/doctor/login/add`, doctor)

    }
  

  
  }
