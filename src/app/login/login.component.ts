import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from './Patient';
import { Doctor } from './Doctor';
import { Admin } from './Admin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  patient: Patient = new Patient("", "", "", "", 0, "");
  doctor: Doctor = new Doctor(0, "", "", "", "", "", 0);
  admin: Admin = new Admin("","");
  doctorStatus: boolean = false;
  patientStatus: boolean = false;
  adminStatus: boolean = false;
  
   ngOnInit(): void { }
  constructor(private router: Router, private patientService: PatientService) {}

public register(){
this.router.navigate(['/app-register']);
}
  public doctorAsLogin() {
    console.log("doctor login");
    this.patientService.doctor_Login(this.doctor).subscribe(
    (Response) =>{
      console.log(Response);
      alert("Login Success!");
      if(Response != null)
      this.router.navigate(['/doctor-dashboard']);
      }, error => console.log("Something is wrong!"));//error is pre define obj
    }

    public adminAsLogin() {
      console.log("admin login");
      this.patientService.admin_Login(this.admin).subscribe(
        (response)  =>{
        console.log(response);
        alert("Login Success!");
        this.router.navigate(['/admin-dashboard']);
        }, error => console.log("Something is wrong!"));//error is pre define obj
      }
      public patientAsLogin() {
        console.log("patient login");
        this.patientService.patient_Login(this.patient).subscribe(
        (Response) =>{
          console.log(Response);
          if(Response != null){
          alert("Login Success!");
          this.router.navigate(['/patient-dashboard']);
          }
          }, error => console.log("Something is wrong!"));//error is pre define obj
        }

     public adminLogin() {
      this.adminStatus = true;
      this.doctorStatus = false;
      this.patientStatus = false;
    }
    public doctorLogin() {
      this.doctorStatus = true;
      this.adminStatus = false;
      this.patientStatus = false;
    }

    public patientLogin() {
      this.patientStatus = true;
      this.adminStatus = false;
      this.doctorStatus = false;
    }

  
}





// public adminAsLogin() {
//   this.patientService.admin_Login(this.admin).subscribe(
//     (response: any) => {
//       if (response && response.success === true) {
//         alert("Login Success!");
//         this.router.navigate(['/admin-dashboard']);
//       } else {
//         alert("Login Failed!"); // You can display a more specific message based on the response.
//       }
//     },
//     error => {
//       console.log("Something is wrong!");
//       // Handle error here, e.g., display an error message to the user.
//     }
//   );
// }