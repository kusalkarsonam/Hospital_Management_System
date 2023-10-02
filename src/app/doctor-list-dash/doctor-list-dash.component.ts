import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';

@Component({
  selector: 'app-doctor-list-dash',
  templateUrl: './doctor-list-dash.component.html',
  styleUrls: ['./doctor-list-dash.component.css']
})
export class DoctorListDashComponent implements OnInit{

 doctorList: any;

 constructor(private doctorService:AddDoctorService){

 }

 ngOnInit(): void {
     this.doctorService.getAllDoctors().subscribe(
      (Response)=>{
        this.doctorList=Response;
      }
     )

 }

}
