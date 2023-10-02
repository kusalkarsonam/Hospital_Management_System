import { Component } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';

@Component({
  selector: 'app-appointment-list-dash',
  templateUrl: './appointment-list-dash.component.html',
  styleUrls: ['./appointment-list-dash.component.css']
})
export class AppointmentListDashComponent {

appointmentList:any;

constructor(private appointmentService:AddDoctorService){

}



ngOnInit(): void {
  this.appointmentService.getAllAppointments().subscribe(
   (Response)=>{
     this.appointmentList=Response;
   }
  )

}

}
