import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from './Patient';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // public gfg = false;
  patient: Patient = new Patient("", "", "", "", 0, "");

   ngOnInit(): void { }
  constructor(private router: Router, private patientService: PatientService) {}

  public register(){
  this.router.navigate(['/app-register']);
  }
  public login() {
    this.patientService.patientLogin(this.patient).subscribe(
      Response =>{
        alert("Login Success!");
        this.router.navigate(['/home']);
        }, error => console.log('error'));//error is pre define obj
      }
  // public login() {
  // this.patientService.patientLogin(this.patient).subscribe(
  //   Response =>{
  //     alert("Login Success!");
  //     this.router.navigate(['/home']);
  //     }, error => console.log('error'));//error is pre define obj
    
  // }
}
