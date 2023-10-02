import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctor-appointment-list',
  templateUrl: './doctor-appointment-list.component.html',
  styleUrls: ['./doctor-appointment-list.component.css']
})
export class DoctorAppointmentListComponent implements OnInit {
  appointmentList:any;
currentDoctor:any;
  constructor(private addDoctorService:AddDoctorService,
    private router:Router){

  }

  ngOnInit(): void {
    this.currentDoctor=sessionStorage.getItem('currentDoctor');
    console.log(this.currentDoctor.doctorId);
    console.log(this.currentDoctor);
      this.addDoctorService.getAppointmentByDoctorId(this.currentDoctor.doctorId).subscribe(
        (Response)=>{
          this.appointmentList=Response;
        }
      );
  }

  public logout(){
    sessionStorage.removeItem('currentDoctor');
    this.router.navigate(['/home']);
  }

}
