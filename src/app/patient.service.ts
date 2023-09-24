import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './commonurl';
import { Patient } from './login/Patient';


@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor(private httpClient: HttpClient) { }
  
  public patientRegister(patient: Patient) { 
      return this.httpClient.post(`${baseUrl}/patient/add`, patient)

    }
  
  public patientLogin(patient: Patient) { 
      return this.httpClient.post(`${baseUrl}/patient/add`, patient)

    }
  

  
  }
