import { Injectable } from '@angular/core';
import { Doctor } from './login/Doctor';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment/appoinment';


@Injectable({
  providedIn: 'root'
})
export class AddDoctorService {
  doctorRegister(doctor: Doctor) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  public getAllDoctors() {
    
    return this.httpClient.get('http://localhost:8003/doctor/doctorlist');

  }

  public getAppointmentByDoctorId(doctorId: number) {
    return this.httpClient.get(`http://localhost:8003/appointments/getByDoctorId/${doctorId}`);
  }

  public getAllPatients() {
    
    return this.httpClient.get('http://localhost:8003/patient/patientlist');

  }

  public getAllAppointments() {
    
    return this.httpClient.get('http://localhost:8003/appointments/all');

  }

  public addDoctor(doctor: Doctor) {
    console.log(doctor);
    return this.httpClient.post('http://localhost:8003/doctor/add',doctor);
  }


  public addAppointment(appointment: Appointment, doctorId:number) {
    console.log(appointment);
    return this.httpClient.post(`http://localhost:8003/appointments/create/${doctorId}`, appointment);
  }

}
